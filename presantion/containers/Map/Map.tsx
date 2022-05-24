import { View } from "react-native";
import React, { useEffect } from "react";
import MapComponent from "../../components/map/MapComponent";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { onSnapshot, doc, setDoc } from "firebase/firestore";
// @ts-ignore
import { db } from "../../../infstracture/firebase";
import { WinchDriverSchema } from "../../../application/winch/types";
import { useNavigation } from "@react-navigation/native";

const setData = async ({
  firstName,
  lastName,
  winchDriverId,
  userName,
  userId,
  userDestination,
  destination,
}: {
  firstName: string;
  lastName: string;
  winchDriverId: string;
  userName: string;
  userId: string;
  userDestination: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
}) => {
  await setDoc(doc(db, "PendingRequets", winchDriverId), {
    firstName,
    lastName,
    winchDriverId,
    userName,
    userId,
    userDestination,
    destination,
  });
};

export default function () {
  const { user } = useUserInfo();
  const {
    origin,
    destination,
    currentDriverIndex,
    winchDrivers,
    currentWinchDriverId,
  } = useWinchState();
  const {
    getTheNextDriver,
    setTravelTimeInformation,
    setPrice,
    setDriverOrigin,
    setWinchDriverId,
  } = useWinchActions();

  const navigation = useNavigation();
  useEffect(() => {
    if (currentWinchDriverId === "fake") {
      // @ts-ignore
      navigation.navigate("Loading");
      return;
    }
    // @ts-ignore
    const requestListener = onSnapshot(
      // @ts-ignore
      doc(db, "PendingRequets", currentWinchDriverId),
      (doc) => {
        if (!doc.exists()) {
          setWinchDriverId({ winchDriverId: "fake" });
          setData({
            lastName: winchDrivers[currentDriverIndex].lastName,
            winchDriverId: winchDrivers[currentDriverIndex].id,
            userName: user?.displayName,
            userId: user?.uid,
            userDestination: {
              latitude: destination.lat,
              longitude: destination.lng,
            },
            destination: {
              latitude: origin.lat,
              longitude: origin.lng,
            },
          });
          if (winchDrivers[0]) {
            setData({
              lastName: winchDrivers[currentDriverIndex].lastName,
              winchDriverId: winchDrivers[currentDriverIndex].id,
              userName: user?.displayName,
              userId: user?.uid,
              userDestination: {
                latitude: destination.lat,
                longitude: destination.lng,
              },
              destination: {
                latitude: origin.lat,
                longitude: origin.lng,
              },
            });
          }
          setTravelTimeInformation();

          console.log("driver ");

          // @ts-ignore
        }
      }
    );

    // listener for the current winch driver location
    const winchDriverLocationListener = onSnapshot(
      // @ts-ignore
      doc(db, "winchDrivers", currentWinchDriverId),
      (doc) => {
        if (doc.exists()) {
          const winchDriver = doc.data() as WinchDriverSchema;
          const geopoint = winchDriver.geopoint;
          const latitude = geopoint.latitude || geopoint._latitude;
          const longitude = geopoint.longitude || geopoint._longitude;
          setDriverOrigin({ driverOrigin: { latitude, longitude } });
        }
        setTravelTimeInformation();
      }
    );
    setTravelTimeInformation();
    setPrice();
    return () => {
      winchDriverLocationListener();
      requestListener();
    };
  }, []);

  return (
    <View>
      <MapComponent
        user={user && user}
        origin={origin}
        destination={destination}
        getTheNextDriver={getTheNextDriver}
        currentDriverIndex={currentDriverIndex}
        winchDrivers={winchDrivers}
        setTravelTimeInformation={setTravelTimeInformation}
      />
    </View>
  );
}

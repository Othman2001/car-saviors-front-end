import { View } from "react-native";
import React, { useEffect } from "react";
import MapComponent from "../../components/map/MapComponent";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { onSnapshot, doc } from "firebase/firestore";
// @ts-ignore
import { db } from "../../../infstracture/firebase";
import { WinchDriverSchema } from "../../../application/winch/types";
import { useNavigation } from "@react-navigation/native";
import { deleteData } from "../../custom/setData";

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
    resetTheStore,
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
          if (winchDrivers[0]) {
            navigation.navigate("Loading");
          }
          setTravelTimeInformation();
          console.log("driver ");
        } else {
          if (doc.data().isFinished) {
            navigation.navigate("Home");
          }
          if (doc.data().isAcccepted === false) {
            setWinchDriverId({ winchDriverId: "getTheNextDriver" });
            deleteData(winchDrivers[0].id);
            // @ts-ignore
            navigation.navigate("Loading");
          }
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
    console.log("current winch driver id ");
    return () => {
      winchDriverLocationListener();
      requestListener();
    };
  }, [origin, destination, currentWinchDriverId]);

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

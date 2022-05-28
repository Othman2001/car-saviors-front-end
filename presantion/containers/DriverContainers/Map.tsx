import React, { useEffect, useState } from "react";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import MapComponent from "../../components/driverComponents/Map";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../infstracture/firebase";
import * as Location from "expo-location";
import {
  NavigationRouteContext,
  useNavigation,
} from "@react-navigation/native";

const LOCATION_TRACKING = "location-tracking";

export default function Map() {
  const { user } = useUserInfo();

  const { driverDestination, driverOrigin, stayAtHome } = useWinchState();
  const { setDestination, setDriverOrigin } = useWinchActions();
  const [location, setLocation] = useState<any>();

  const requestPermissions = async ({
    setDriverOrigin,
  }: {
    setDriverOrigin: (payload: { driverOrigin: any }) => void;
  }) => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      console.log("location is granted");
      foregroundSubscription = Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Balanced,
        },
        (location) => {
          console.log(location, "location");

          const winchDriverRef =
            user?.uid && doc(db, "winchDrivers", user?.uid);
          updateDoc(winchDriverRef, {
            geopoint: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
          });
          setDriverOrigin({
            driverOrigin: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
          });
        }
      );
    }
  };

  const navigation = useNavigation();
  useEffect(() => {
    requestPermissions({ setDriverOrigin });
    if (stayAtHome) {
      navigation.navigate("Home");
    }
  }, []);

  return (
    <MapComponent
      driverDestination={driverDestination}
      driverOrigin={driverOrigin}
      setDriverOrigin={setDriverOrigin}
      user={user}
      location={location}
    />
  );
}

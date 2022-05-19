import React, { useEffect, useState } from "react";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import MapComponent from "../../components/driverComponents/Map";
import * as Location from "expo-location";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import * as TaskManager from "expo-task-manager";
import { LocationObject } from "expo-location";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../infstracture/firebase";

const LOCATION_TRACKING = "location-tracking";

export default function Map() {
  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync("location-tracking", {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 5000,
      distanceInterval: 0,
    });
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TRACKING
    );
  };
  const { driverDestination, driverOrigin } = useWinchState();
  const { user } = useUserInfo();
  const { setDestination, setDriverOrigin } = useWinchActions();
  const [location, setLocation] = useState<LocationObject>();

  useEffect(() => {
    TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
      if (error) {
        console.log(error);
        return;
      }
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          //   @ts-ignore
          alert("error");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
      if (data) {
        // @ts-ignore
        const { locations } = data;
        let lat = locations[0].coords.latitude;
        let long = locations[0].coords.longitude;
        console.log(locations, "locations");
        if (user?.uid) {
          // @ts-ignore
          const winchDriversRef = doc(db, "winchDrivers", user?.uid);
          console.log("reached");
          updateDoc(winchDriversRef, {
            geopoint: {
              latitude: lat,
              longitude: long,
            },
          });
        }
        console.log(`${new Date(Date.now()).toLocaleString()}: ${lat},${long}`);
      }
    });
  }, []);

  return (
    <MapComponent
      driverDestination={driverDestination}
      driverOrigin={driverOrigin}
      setDriverOrigin={setDriverOrigin}
      startLocationTracking={startLocationTracking}
      user={user}
      location={location}
    />
  );
}

import React, { useEffect, useState } from "react";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import MapComponent from "../../components/driverComponents/Map";
import * as Location from "expo-location";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { LocationObject } from "expo-location";

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

  useEffect(() => {}, []);

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

import { View } from "react-native";
import React, { useEffect } from "react";
import MapComponent from "../../components/map/MapComponent";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../../infstracture/firebase";
import { WinchDriverSchema } from "../../../application/winch/types";
export default function () {
  const { user } = useUserInfo();
  const { origin, destination, currentDriverIndex, winchDrivers } =
    useWinchState();
  const {
    getTheNextDriver,
    setTravelTimeInformation,
    setPrice,
    setDriverOrigin,
  } = useWinchActions();

  useEffect(() => {
    const Id = winchDrivers[0]?.id;
    const winchDriverLocationListener = onSnapshot(
      doc(db, "winchDrivers", Id),
      (doc) => {
        if (doc.exists) {
          const winchDriver = doc.data() as WinchDriverSchema;
          const geopoint = winchDriver.geopoint;
          const latitude = geopoint.latitude || geopoint._latitude;
          const longitude = geopoint.longitude || geopoint._longitude;
          setDriverOrigin({ driverOrigin: { latitude, longitude } });
        }
      }
    );
    return () => {
      winchDriverLocationListener();
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

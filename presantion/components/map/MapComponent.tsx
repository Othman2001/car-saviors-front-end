import { Dimensions, StyleSheet, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import * as Styled from "./style";
import { IUserData } from "../../../application/authentication/state";
import {
  RequestSchema,
  WinchDriverSchema,
} from "../../../application/winch/types";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { setData } from "../../custom/setData";

interface IMapComponentProps {
  user: IUserData | null;
  origin: any;
  destination: any;
  currentDriverIndex: number;
  winchDrivers: [WinchDriverSchema] | [];
  setTravelTimeInformation: () => Promise<void>;
  getTheNextDriver: () => void;
}

export default function MapComponent({
  origin,
  destination,
  winchDrivers,
  setTravelTimeInformation,
  user,
  currentDriverIndex,
  getTheNextDriver,
}: IMapComponentProps) {
  const [googleApiKey, setGoogleApiKey] = useState(
    "AIzaSyBEI5mJ_Yga3K4lnZRIWzvk8JEm4WaFWrA"
  );
  const mapRef = useRef<MapView | undefined>(undefined);
  const { driverOrigin, request, requestState } = useWinchState();

  const { setRequest } = useWinchActions();

  useEffect(() => {
    if (!origin || !destination || !driverOrigin) return;
    mapRef &&
      mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });

    const Request: RequestSchema = {
      firstName: winchDrivers[currentDriverIndex]?.firstName,
      lastName: winchDrivers[currentDriverIndex]?.lastName,
      winchDriverId: winchDrivers[currentDriverIndex]?.id,
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
      isAcccepted: true,
      isFinished: false,
    };
    if (Request != request) {
      setRequest({ request: Request });
      setData(Request);
    }

    console.log(driverOrigin, "driverOrigin");
  }, [
    winchDrivers,
    driverOrigin,
    origin,
    destination,
    driverOrigin?._latitude,
    driverOrigin?._longitude,
    driverOrigin?.latitude,
    driverOrigin?.longitude,
    requestState,
  ]);

  return (
    <View style={styles.container}>
      <Styled.MapContainer>
        <MapView
          // @ts-ignore
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: origin?.lat,
            longitude: origin?.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapViewDirections
            origin={{
              latitude: origin?.lat,
              longitude: origin?.lng,
            }}
            destination={{
              latitude: driverOrigin?._latitude || driverOrigin?.latitude,
              longitude: driverOrigin?._longitude || driverOrigin?.longitude,
            }}
            apikey={googleApiKey}
            strokeWidth={3}
            strokeColor="#265A60"
          />
          <Marker
            coordinate={{
              latitude: origin.lat,
              longitude: origin.lng,
            }}
            identifier="origin"
          >
            <Image
              source={require("../../../assets/car.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: driverOrigin?.latitude ? driverOrigin?.latitude : 0,
              longitude: driverOrigin?.longitude ? driverOrigin?.longitude : 0,
            }}
            identifier="destination"
          >
            <Image
              source={require("../../../assets/tow-truck.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </Marker>
        </MapView>
      </Styled.MapContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 300,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

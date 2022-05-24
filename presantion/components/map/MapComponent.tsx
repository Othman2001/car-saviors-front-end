import { Dimensions, StyleSheet, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import * as Styled from "./style";
import { useNavigation } from "@react-navigation/native";
import { IUserData } from "../../../application/authentication/state";
import { WinchDriverSchema } from "../../../application/winch/types";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../infstracture/firebase";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";

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
}: IMapComponentProps) {
  const [googleApiKey, setGoogleApiKey] = useState(
    "AIzaSyBEI5mJ_Yga3K4lnZRIWzvk8JEm4WaFWrA"
  );
  const mapRef = useRef<MapView | undefined>(undefined);
  const navigation = useNavigation();
  const { driverOrigin, currentWinchDriverId, currentDriverIndex } =
    useWinchState();
  const { getTheNextDriver } = useWinchActions();
  const { user } = useUserInfo();

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
    userName: string | undefined | null;
    userId: string | undefined | null;
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

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef &&
      mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    setData({
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
    });
    console.log(driverOrigin, "driverOrigin");
    setTravelTimeInformation();
  }, [winchDrivers, driverOrigin]);

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
    height: Dimensions.get("window").height - 400,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

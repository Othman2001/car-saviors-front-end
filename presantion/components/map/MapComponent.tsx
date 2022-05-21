import { Dimensions, StyleSheet, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import * as Styled from "./style";
import { getFirestore, setDoc, doc, onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { IUserData } from "../../../application/authentication/state";
import { WinchDriverSchema } from "../../../application/winch/types";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";

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
  user,
  origin,
  destination,
  currentDriverIndex,
  winchDrivers,
  setTravelTimeInformation,
}: IMapComponentProps) {
  const [googleApiKey, setGoogleApiKey] = useState(
    "AIzaSyBEI5mJ_Yga3K4lnZRIWzvk8JEm4WaFWrA"
  );
  const mapRef = useRef<MapView | undefined>(undefined);
  const navigation = useNavigation();
  const { driverOrigin } = useWinchState();

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef &&
      mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    setTravelTimeInformation();
    const Id = winchDrivers[0]?.id;
    const db = getFirestore();
    if (winchDrivers.length) {
    }
    // @ts-ignore
    setDoc(doc(db, "PendingRequets", Id), {
      winchDriverId: winchDrivers[currentDriverIndex].id,
      winchDriverName:
        winchDrivers[0]?.firstName + " " + winchDrivers[0]?.lastName,
      winchDriverPhone: winchDrivers[0]?.phoneNumber,
      userName: user?.displayName,
      userId: user?.uid,
      id: Id,
      userDestination: {
        latitude: destination.lat,
        longitude: destination.lng,
      },
      destination: {
        latitude: origin.lat,
        longitude: origin.lng,
      },
    });

    //  @ts-ignore
    const unSub = onSnapshot(doc(db, "PendingRequets", Id), async (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      if (!doc.exists()) {
        //  @ts-ignore
        navigation.navigate("Rejected");
        //  @ts-ignore
        setDoc(doc(db, "PendingRequets", Id), {
          winchDriverId: winchDrivers[0]?.id,
          winchDriverName:
            winchDrivers[0]?.firstName + " " + winchDrivers[0]?.lastName,
          winchDriverPhone: winchDrivers[0]?.phoneNumber,
          userName: user?.displayName,
          userId: user?.uid,
          id: Id,
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
    });
    if (!winchDrivers.length) {
      // @ts-ignore
      alert("no drivers available");
    }
    setTravelTimeInformation();
    console.log("rendered");
    return () => {
      unSub();
    };
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
              latitude: driverOrigin?._latitude || driverOrigin?.latitude,
              longitude: driverOrigin?._longitude || driverOrigin?.longitude,
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

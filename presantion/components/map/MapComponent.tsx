import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import { useActions, useAppState } from "../../../config";
import MapViewDirections from "react-native-maps-directions";
import * as Styled from "./style";
import { getFirestore, setDoc, doc, onSnapshot } from "firebase/firestore";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { useNavigation } from "@react-navigation/native";

export default function MapComponent() {
  const [googleApiKey, setGoogleApiKey] = useState(
    "AIzaSyBEI5mJ_Yga3K4lnZRIWzvk8JEm4WaFWrA"
  );
  const {
    authentication: { user },
    winch: { origin, destination, currentDriverIndex, winchDrivers },
  } = useAppState();
  const {
    winch: { getTheNextDriver, setPrice },
  } = useActions();

  const { setTravelTimeInformation } = useWinchActions();

  const mapRef = useRef(null);
  const navigation = useNavigation();
  useEffect(() => {
    if (!origin || !destination) return;
    // @ts-ignore
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
    setTravelTimeInformation();

    setTravelTimeInformation();
    // @ts-ignore
    const Id = winchDrivers[0]?.id;
    const db = getFirestore();
    // @ts-ignore
    setPrice({ price: winchDrivers[currentDriverIndex].price });
    setDoc(doc(db, "PendingRequets", Id), {
      //  @ts-ignore
      winchDriverId: winchDrivers[currentDriverIndex].id,
      //  @ts-ignore
      winchDriverName:
        //  @ts-ignore
        winchDrivers[0].firstName + " " + winchDrivers[0].lastName,
      //  @ts-ignore
      winchDriverPhone: winchDrivers[0].phoneNumber,
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

    const unSub = onSnapshot(doc(db, "PendingRequets", Id), async (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      if (!doc.exists()) {
        navigation.navigate("Rejected");

        // @ts-ignore
        // @ts-ignore
        setDoc(doc(db, "PendingRequets", Id), {
          //  @ts-ignore
          winchDriverId: winchDrivers[0].id,
          //  @ts-ignore
          winchDriverName:
            //  @ts-ignore
            winchDrivers[0].firstName + " " + winchDrivers[0].lastName,
          //  @ts-ignore
          winchDriverPhone: winchDrivers[0].phoneNumber,
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

    setTravelTimeInformation();
    return () => {
      unSub();
    };
  }, [winchDrivers]);

  return (
    <View style={styles.container}>
      <Styled.MapContainer>
        <MapView
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
              latitude:
                winchDrivers?.[currentDriverIndex]?.geopoint._latitude ||
                winchDrivers?.[currentDriverIndex]?.geopoint.latitude,
              longitude:
                winchDrivers?.[currentDriverIndex]?.geopoint._longitude ||
                winchDrivers?.[currentDriverIndex]?.geopoint.longitude,
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
              latitude:
                winchDrivers?.[currentDriverIndex]?.geopoint._latitude ||
                winchDrivers?.[currentDriverIndex]?.geopoint.latitude,
              longitude:
                winchDrivers?.[currentDriverIndex]?.geopoint._longitude ||
                winchDrivers?.[currentDriverIndex]?.geopoint.longitude,
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

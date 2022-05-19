import { Dimensions, StyleSheet, Text, View, Image, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import { useAppState } from "../../../config";
import MapViewDirections from "react-native-maps-directions";
import * as Styled from "./style";
import { uid } from "uid";
import { getFirestore, setDoc, doc, onSnapshot } from "firebase/firestore";

export default function MapComponent() {
  const [googleApiKey, setGoogleApiKey] = useState(
    "AIzaSyBEI5mJ_Yga3K4lnZRIWzvk8JEm4WaFWrA"
  );
  const {
    authentication: { user },
    winch: { origin, destination, currentDriverIndex, winchDrivers },
  } = useAppState();

  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin || !destination) return;
    // @ts-ignore
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });

    if (winchDrivers.length > 0) {
      // @ts-ignore
      const Id = winchDrivers[0]?.id;
      const db = getFirestore();
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
      });
      onSnapshot(doc(db, "PendingRequets", Id), (doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        if (!doc.exists()) {
          alert(
            "winch driver have rjected the request we will call anthor one for you"
          );
        }
      });
    }
  }, [origin, destination]);

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
            origin={origin.description}
            destination={{
              latitude: winchDrivers?.[currentDriverIndex]?.geopoint._latitude,
              longitude:
                winchDrivers?.[currentDriverIndex]?.geopoint._longitude,
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
              latitude: winchDrivers?.[currentDriverIndex]?.geopoint._latitude,
              longitude:
                winchDrivers?.[currentDriverIndex]?.geopoint._longitude,
            }}
            identifier="destination"
          >
            <Image
              source={require("../../../assets/tow-truck 1.png")}
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

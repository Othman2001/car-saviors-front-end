import { Dimensions, StyleSheet, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import { uid } from "uid";
// @ts-ignore
import { IUserData } from "../../../appliction/authentication/state";
import { LocationObject } from "expo-location";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TRACKING = "location-tracking";

interface IMapComponentProps {
  driverOrigin: any;
  driverDestination: any;
  user: IUserData | null;
  setDriverOrigin: (payload: { driverOrigin: any }) => void;
  location: LocationObject | undefined;
}

export default function MapComponent({
  driverDestination,
  driverOrigin,
  user,
}: IMapComponentProps) {
  const id1 = uid(2);
  const id2 = uid(2);
  const [googleApiKey, setGoogleApiKey] = useState(
    "AIzaSyBEI5mJ_Yga3K4lnZRIWzvk8JEm4WaFWrA"
  );
  const mapRef = useRef(null);

  const requestPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  };
  useEffect(() => {
    if (driverOrigin && driverDestination) {
      // @ts-ignore
      mapRef?.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });

      requestPermissions();
    }
  }, [driverDestination, driverOrigin]);

  return (
    <View style={styles.container}>
      <View>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: driverOrigin?.latitude,
            longitude: driverOrigin?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapViewDirections
            origin={{
              latitude: driverOrigin.latitude || driverOrigin._latitude,
              longitude: driverOrigin.longitude || driverOrigin._longitude,
            }}
            destination={{
              latitude: driverDestination.latitude,
              longitude: driverDestination.longitude,
            }}
            apikey={googleApiKey}
            strokeWidth={3}
            strokeColor="#265A60"
          />
          <Marker
            key={id2}
            coordinate={{
              latitude: driverDestination.latitude,
              longitude: driverDestination.longitude,
            }}
            identifier="destination"
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
            key={id1}
            coordinate={{
              latitude: driverOrigin.latitude || driverOrigin._latitude,
              longitude: driverOrigin.longitude || driverOrigin._longitude,
            }}
            identifier="origin"
          >
            <Image
              source={require("./winch.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </Marker>
        </MapView>
      </View>
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

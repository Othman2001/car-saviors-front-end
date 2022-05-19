import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MapComponent from "../../components/map/MapComponent";
import WinchDriver from "../../components/winchDriver/WinchDriver";
import { useActions, useAppState } from "../../../config";
import WinchDriverMap from "../DriverScreens/WinchDriverMap";

export default function Map() {
  const {
    winch: { fetchDrivers },
  } = useActions();
  const {
    winch: { origin, userType },
  } = useAppState();
  useEffect(() => {
    // calculateTheDistance({ long: origin.long, lat: origin.lat });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MapComponent />
      </View>

      <View style={{ flex: 1 }}>
        {userType === "driver" && <WinchDriverMap />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

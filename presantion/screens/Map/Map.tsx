import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MapComponent from "../../components/map/MapComponent";
import WinchDriver from "../../components/winchDriver/WinchDriver";
import { useActions, useAppState } from "../../../config";
import WinchDriverMap from "../DriverScreens/WinchDriverMap";
import UserData from "../../components/driverComponents/userData/UserData";

export default function Map() {
  const {
    winch: { userType },
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
        <WinchDriver />
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

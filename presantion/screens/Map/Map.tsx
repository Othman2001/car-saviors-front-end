import {
  SafeAreaView,
  StyleSheet,
  View,
  UIManager,
  LayoutAnimation,
} from "react-native";
import React, { useEffect } from "react";
import MapContainer from "../../containers/Map/Map";
import { useAppState } from "../../../config";
import WinchDriverMap from "../DriverScreens/WinchDriverMap";
import WinchDriver from "../../containers/WinchDriver/WinchDriver";

export default function Map() {
  const {
    winch: { userType },
  } = useAppState();
  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MapContainer />
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

import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "overmind-react";
import { overmind } from "./config";
import AppLoading from "expo-app-loading";
import Register from "./presantion/screens/RegisterScreen/Register";
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import React from "react";

export default function App() {
  let [fontsLoaded] = useFonts({ OpenSans_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider value={overmind}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#E5E5E5",
        }}
      >
        <View
          style={{
            position: "absolute",
            zIndex: 1000,
            top: -10,
            left: 0,
            right: 0,
            marginLeft: -100,
          }}
        >
          <Image
            source={require("./assets/circle.png")}
            style={{
              width: 240,
              height: 240,
              zIndex: 100,
              top: 0,
              left: 0,
              right: 0,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#E5E5E5",
            flex: 1,
          }}
        >
          <Register />
        </View>
      </SafeAreaView>
    </Provider>
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

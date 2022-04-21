import "react-native-gesture-handler";
import { config } from "./config";
import { Provider } from "overmind-react";
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createOvermind } from "overmind";
import Application from "./Application";

const overmind = createOvermind(config, {
  devtools: "localhost:3031",
});

export default function App() {
  const Stack = createStackNavigator();
  let [fontsLoaded] = useFonts({ OpenSans_700Bold });

  return (
    <Provider value={overmind}>
      <NavigationContainer>
        <Application />
      </NavigationContainer>
    </Provider>
  );
}

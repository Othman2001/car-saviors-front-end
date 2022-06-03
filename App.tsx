import "react-native-gesture-handler";
import { config } from "./config";
import { Provider } from "overmind-react";
import AppLoading from "expo-app-loading";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { default as theme } from "./theme.json";
import { LogBox } from "react-native";
// @ts-ignore
import React, { useEffect } from "react";
import { createOvermind } from "overmind";
import Application from "./Application";
import {
  useFonts,
  Exo_400Regular,
  Exo_600SemiBold,
  Exo_700Bold,
} from "@expo-google-fonts/exo";
import {
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
} from "@expo-google-fonts/cairo";

LogBox.ignoreAllLogs(true);
const overmind = createOvermind(config, {
  devtools: "localhost:3031",
});

export default function App() {
  const [isLoaded] = useFonts({
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Exo_400Regular,
    Exo_600SemiBold,
    Exo_700Bold,
  });

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider value={overmind}>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <NavigationContainer>
            <Application />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    );
  }
}

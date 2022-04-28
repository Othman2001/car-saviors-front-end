import "react-native-gesture-handler";
import { config } from "./config";
import { Provider } from "overmind-react";
import AppLoading from "expo-app-loading";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { default as theme } from "./theme.json";

// @ts-ignore
import React, { useEffect } from "react";
import { createOvermind } from "overmind";
import i18next from "./config/i18n/config";
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
import { I18nManager, StatusBar } from "react-native";
import i18n from "./config/i18n/config";

const overmind = createOvermind(config, {
  devtools: "localhost:3031",
});
export default function App() {
  const Stack = createStackNavigator();

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

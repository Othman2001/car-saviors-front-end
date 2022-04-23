import {
  View,
  KeyboardAvoidingView,
  Platform,
  I18nManager,
} from "react-native";
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { createStackNavigator } from "@react-navigation/stack";
// @ts-ignore
import React, { useEffect } from "react";
import { useAppState } from "./config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStack from "./presantion/navigations/authStack";
import UserNavigation from "./presantion/navigations/userNavigation";
import i18next from "./config/i18n/config";
import i18n from "./config/i18n/config";

const Taps = createBottomTabNavigator();

const Application = () => {
  const {
    authentication: { user },
    theme: { lng },
  } = useAppState();
  useEffect(() => {
    lng === "ar" ? I18nManager.forceRTL(true) : I18nManager.forceRTL(false);
    I18nManager.forceRTL(true);
    i18n.locale = lng;
  }, [lng]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E5E5E5",
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {user ? (
          <>
            <UserNavigation />
          </>
        ) : (
          <AuthStack />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Application;

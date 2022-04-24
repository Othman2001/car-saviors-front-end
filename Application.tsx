import {
  View,
  KeyboardAvoidingView,
  Platform,
  I18nManager,
  Alert,
} from "react-native";
// @ts-ignore
import React, { useEffect } from "react";
import { useAppState } from "./config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStack from "./presantion/navigations/authStack";
import UserNavigation from "./presantion/navigations/userNavigation";
import i18n from "./config/i18n/config";
import DrawerComponent from "./presantion/components/common/Drawer";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DrawerNavigation from "./presantion/navigations/DrawerNavigation";

const Taps = createBottomTabNavigator();

const Application = () => {
  const {
    authentication: { user, error },
    theme: { lng },
  } = useAppState();
  const navigation = useNavigation();
  useEffect(() => {
    lng === "ar" ? I18nManager.forceRTL(true) : I18nManager.forceRTL(false);
    i18n.locale = lng;
    error && Alert.alert(error);
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

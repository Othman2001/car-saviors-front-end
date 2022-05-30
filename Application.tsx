import {
  View,
  KeyboardAvoidingView,
  Platform,
  I18nManager,
} from "react-native";
// @ts-ignore
import React, { useEffect } from "react";
import { useAppState } from "./config";
import AuthStack from "./presantion/navigations/authStack";
import UserNavigation from "./presantion/navigations/userNavigation";
import CarOwnerNavigation from "./presantion/navigations/CarOwnerNavigation";
import WinchDriverNavigation from "./presantion/navigations/winchDriverNavigtaion";
import i18n from "./config/i18n/config";
import LoadingNavigation from "./presantion/navigations/LoadingNavigations";

const Application = () => {
  const {
    authentication: { user, currentUserRole },
  } = useAppState();

  useEffect(() => {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    console.log(I18nManager.isRTL, "isrtl");
    console.log(i18n.currentLocale(), "current");
  }, []);

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
            {currentUserRole === "car-owner" ? (
              <CarOwnerNavigation />
            ) : currentUserRole === "driver" ? (
              <WinchDriverNavigation />
            ) : currentUserRole === "user" ? (
              <UserNavigation />
            ) : (
              <LoadingNavigation />
            )}
          </>
        ) : (
          <AuthStack />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Application;

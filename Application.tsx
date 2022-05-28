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

const Application = () => {
  const {
    authentication: { user, currentUserRole },
    theme: { lng },
  } = useAppState();

  useEffect(() => {}, []);
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
            ) : (
              <UserNavigation />
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

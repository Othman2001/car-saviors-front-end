import {
  View,
  KeyboardAvoidingView,
  Platform,
  I18nManager,
} from "react-native";
// @ts-ignore
import React, { useEffect, useState } from "react";
import { useActions, useAppState } from "./config";
import AuthStack from "./presantion/navigations/authStack";
import UserNavigation from "./presantion/navigations/userNavigation";
import { useNavigation } from "@react-navigation/native";
import CarOwnerNavigation from "./presantion/navigations/CarOwnerNavigation";
import WinchNavigation from "./presantion/navigations/winchNavigation";
import WinchDriverNavigation from "./presantion/navigations/winchDriverNavigtaion";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { doc, updateDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "./infstracture/firebase";

const LOCATION_TRACKING = "location-tracking";

const Application = () => {
  const [currentNavigation, setCurrentNavigation] = React.useState("");
  const {
    winch: { setDriverOrigin },
  } = useActions();
  const {
    authentication: { user, currentUserRole },
    theme: { lng },
  } = useAppState();
  const navigation = useNavigation();

  const [location, setLocation] = useState<any>();

  useEffect(() => {
    lng === "ar" ? I18nManager.forceRTL(true) : I18nManager.forceRTL(false);
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

import { Button } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import TopHeader from "../../components/common/topHeader";
import UserHeader from "../../containers/UserHeader/UserHeader";
import { I18nManager } from "react-native";
import * as Styled from "./style";
import { useActions } from "../../../config";
import { Restart } from "fiction-expo-restart";
import i18n from "../../../config/i18n/config";
import { useThemeActions } from "../../../application/custom-hooks/useThemeActions";

export default function Profile() {
  const { fontFamily, lng } = useTheme();
  const { changeLocale } = useThemeActions();
  const { user, currentUserRole } = useUserInfo();
  const {
    authentication: { SignOut },
  } = useActions();

  const changeLng = () => {
    if (lng === "ar") {
      changeLocale({ lng: "en" });
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      i18n.locale = "en";

      Restart();
    } else {
      changeLocale({ lng: "ar" });
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      i18n.locale = "ar";
      Restart();
    }
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TopHeader />
      <UserHeader />
      <Styled.AppVersion fontFamily={fontFamily}>
        {" "}
        App version: 1.0.0
      </Styled.AppVersion>
      <Styled.UserEmail fontFamily={fontFamily}>
        user email: {user?.email}
      </Styled.UserEmail>
      <Styled.AppVersion fontFamily={fontFamily}>
        UserRole: {currentUserRole}
      </Styled.AppVersion>

      <Button onPress={changeLng}>Change lng</Button>
      <View
        style={{
          marginLeft: 40,
          marginRight: 40,
          height: 100,
          marginTop: 80,
          marginBottom: 80,
        }}
      >
        <Button
          onPress={() => {
            SignOut();
          }}
        >
          Sign Out
        </Button>
      </View>
    </View>
  );
}

import { Button } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { View, UIManager, LayoutAnimation } from "react-native";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import UserHeader from "../../containers/UserHeader/UserHeader";
import * as Styled from "./style";
import { useActions } from "../../../config";
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
      i18n.locale = "en";
    } else {
      changeLocale({ lng: "ar" });
      i18n.locale = "ar";
    }
  };
  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <UserHeader />
      <Styled.AppVersion
        isAr={lng === "ar" ? true : false}
        fontFamily={fontFamily}
      >
        {i18n.t("profile.appVersion")}: 1.0.0
      </Styled.AppVersion>
      <Styled.UserEmail
        isAr={lng === "ar" ? true : false}
        fontFamily={fontFamily}
      >
        {i18n.t("profile.email")}: {user?.email}
      </Styled.UserEmail>
      <Styled.AppVersion
        isAr={lng === "ar" ? true : false}
        fontFamily={fontFamily}
      >
        {i18n.t("profile.role")}: {currentUserRole}
      </Styled.AppVersion>
      <View
        style={{
          marginLeft: 40,
          marginRight: 40,
          height: 100,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Button onPress={changeLng}>
          {i18n.currentLocale() === "ar" ? "تغيير اللغة" : "Change Language"}
        </Button>
      </View>
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
          {i18n.t("Signout")}
        </Button>
      </View>
    </View>
  );
}

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

export default function Profile() {
  const { fontFamily, lng } = useTheme();
  const { user } = useUserInfo();
  const {
    authentication: { SignOut },
  } = useActions();
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
        {" "}
        user email: {user?.email}{" "}
      </Styled.UserEmail>
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

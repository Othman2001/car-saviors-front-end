import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import * as Styled from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { IUserData } from "../../../application/authentication/state";
import i18n from "../../../config/i18n/config";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";

interface IUserHeader {
  user: IUserData | null;
  rentingCar: number;
  rentedCar: number;
  visitedWorkshops: number;
  isDriver?: boolean;
}

export default function UserHeader({ user, isDriver }: IUserHeader) {
  const { fontFamily } = useTheme();
  const { currentUserRole } = useUserInfo();
  return (
    <Styled.Container backgroundColor={!isDriver ? "265A60" : "4B4B4B"}>
      <Styled.userInfoContainer>
        <Styled.userAvatar>
          <FontAwesome name="user" size={32} color="white" />
        </Styled.userAvatar>
        <Text style={styles.text} category="s1">
          {i18n.t("userHeader.welcome")} , {user?.displayName}
          {isDriver && user?.email}
        </Text>
      </Styled.userInfoContainer>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    fontFamily: "EXO_600SemiBold",
  },
});

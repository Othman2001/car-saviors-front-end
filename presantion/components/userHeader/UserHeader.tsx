import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import * as Styled from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { IUserData } from "../../../application/authentication/state";
import i18n from "../../../config/i18n/config";
import { useTheme } from "../../../application/custom-hooks/useTheme";

interface IUserHeader {
  user: IUserData | null;
  rentingCar: number;
  rentedCar: number;
  visitedWorkshops: number;
}

export default function UserHeader({
  user,
  rentedCar,
  rentingCar,
  visitedWorkshops,
}: IUserHeader) {
  const { fontFamily } = useTheme();
  return (
    <Styled.Container>
      <Styled.userInfoContainer>
        <Styled.userAvatar>
          <FontAwesome name="user" size={32} color="white" />
        </Styled.userAvatar>
        <Text style={styles.text} category="s1">
          {i18n.t("userHeader.welcome")} , {user?.displayName}
        </Text>
        <Styled.userMetricsContainer>
          <Styled.userMetricNumber fontFamily={fontFamily}>
            {rentedCar}
          </Styled.userMetricNumber>
          <Styled.userMetricsText fontFamily={fontFamily}>
            {" "}
            {i18n.t("userHeader.rentedCar")}
          </Styled.userMetricsText>
          <Styled.userMetricNumber fontFamily={fontFamily}>
            {rentingCar}
          </Styled.userMetricNumber>

          <Styled.userMetricsText fontFamily={fontFamily}>
            {" "}
            {i18n.t("userHeader.rentingCar")}
          </Styled.userMetricsText>
          <Styled.userMetricNumber fontFamily={fontFamily} left={75}>
            {visitedWorkshops}
          </Styled.userMetricNumber>

          <Styled.userMetricsText fontFamily={fontFamily}>
            {" "}
            {i18n.t("userHeader.visitedWorkshops")}
          </Styled.userMetricsText>
        </Styled.userMetricsContainer>
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

import { StyleSheet, Text, View } from "react-native";
import * as Styled from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import {} from "../loginForm/style";
// @ts-ignore
import React from "react";

export default function UserHeader() {
  return (
    <Styled.Container>
      <Styled.userInfoContainer>
        <Styled.userAvatar>
          <FontAwesome name="user" size={32} color="white" />
        </Styled.userAvatar>
        <Styled.userName>Welcome , Vabin</Styled.userName>
        <Styled.userMetricsContainer>
          <Styled.userMetricNumber>0</Styled.userMetricNumber>
          <Styled.userMetricsText> rented cars</Styled.userMetricsText>
          <Styled.userMetricNumber>0</Styled.userMetricNumber>

          <Styled.userMetricsText> renting cars</Styled.userMetricsText>
          <Styled.userMetricNumber left={75}>0</Styled.userMetricNumber>

          <Styled.userMetricsText> visited Workshop</Styled.userMetricsText>
        </Styled.userMetricsContainer>
      </Styled.userInfoContainer>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({});

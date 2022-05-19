import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { useAppState } from "../../../config";

const icons = [
  { key: "phone", id: 1, src: require("../../../assets/phone.png") },
  { key: "time", id: 2, src: require("../../../assets/time.png") },
  { key: "cost", id: 3, src: require("../../../assets/cost.jpg") },
];

export default function WinchDriver() {
  const { fontFamily } = useTheme();
  const {
    winch: { winchDrivers },
  } = useAppState();
  return (
    <Styled.CardsContainer>
      <Styled.Card>
        <Styled.CardImage source={require("../../../assets/phone.png")} />
        <Styled.CardText fontFamily={fontFamily}>Phone NUmber</Styled.CardText>
      </Styled.Card>
      <Styled.Card>
        <Styled.CardImage source={require("../../../assets/time.png")} />
        <Styled.CardText fontFamily={fontFamily}>Phone NUmber</Styled.CardText>
      </Styled.Card>
      <Styled.Card>
        <Styled.CardImage source={require("../../../assets/cost.jpg")} />
        <Styled.CardText fontFamily={fontFamily}>20 L.E</Styled.CardText>
      </Styled.Card>
    </Styled.CardsContainer>
  );
}

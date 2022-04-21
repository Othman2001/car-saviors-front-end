import { StyleSheet, Text, View } from "react-native";
// @ts-ignore
import React from "react";
import * as Styled from "./style";
import { AntDesign } from "@expo/vector-icons";
import { FlexContainer } from "../common/style";
import { useNavigation } from "@react-navigation/native";

const cardsSchema = [
  {
    id: "rent",
    icon: require("../../../assets/rentalkey.png"),
    text: "Rent a car",
    route: "Rent",
  },
  {
    id: "winch",
    icon: require("../../../assets/cane.png"),
    text: "Request a winch",
    route: "Winch",
  },
  {
    id: "workshops",
    icon: require("../../../assets/work.png"),
    text: "see workshops",
    route: "WorkShops",
  },
];

export default function Cards() {
  const { navigate } = useNavigation();
  return (
    <Styled.CardContainer>
      {cardsSchema.map((feat) => (
        <Styled.Card
          key={feat.id}
          onPress={() => {
            navigate(feat.route);
          }}
        >
          <Styled.CardImage source={feat.icon} />
          <FlexContainer>
            <Styled.CardTitle> {feat.text} </Styled.CardTitle>
          </FlexContainer>
        </Styled.Card>
      ))}
    </Styled.CardContainer>
  );
}

const styles = StyleSheet.create({});

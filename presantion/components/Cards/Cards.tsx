import { StyleSheet } from "react-native";
// @ts-ignore
import React from "react";
import * as Styled from "./style";
import { FlexContainer } from "../common/style";
import { useNavigation } from "@react-navigation/native";
import { useAppState } from "../../../config";
import i18n from "../../../config/i18n/config";

const cardsSchema = [
  {
    id: "rent",
    icon: require("../../../assets/rentalkey.png"),
    text: "Rent a car",
    arText: "احجز سيارة",
    route: "Rent",
  },
  {
    id: "winch",
    icon: require("../../../assets/cane.png"),
    text: "Request a winch",
    arText: "طلب ونش",
    route: "Winch",
  },
  {
    id: "workshops",
    icon: require("../../../assets/work.png"),
    text: "see workshops",
    arText: "معاينة الصيانة",
    route: "WorkShops",
  },
];

export default function Cards() {
  const { navigate } = useNavigation();
  const {
    theme: { fontFamily },
  } = useAppState();
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
            <Styled.CardTitle fontFamily={fontFamily}>
              {" "}
              {i18n.currentLocale() === "ar" ? feat.arText : feat.text}
            </Styled.CardTitle>
          </FlexContainer>
        </Styled.Card>
      ))}
    </Styled.CardContainer>
  );
}

const styles = StyleSheet.create({});

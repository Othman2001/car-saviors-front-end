import { View } from "react-native";
import React from "react";
import * as Styled from "./style";
import { useAppState } from "../../../config";
import i18n from "../../../config/i18n/config";

interface ICarDetailsCardProps {
  images: [string];
  carBrand: string;
  carModel: string;
  carModelYear: string;
  pricePerDay: number;
  location: string;
  motorType: string;
  fontFamily: string;
}

export default function CarDetailsCard({
  images,
  carBrand,
  carModel,
  carModelYear,
  pricePerDay,
  location,
  motorType,
}: ICarDetailsCardProps) {
  const {
    theme: { fontFamily, lng },
  } = useAppState();

  return (
    <Styled.CardContainer>
      <Styled.Flex>
        <Styled.CardImage
          source={{
            uri: images[0],
          }}
        />
        <View>
          <Styled.CardTitle
            isAr={lng === "ar" ? true : false}
            fontFamily={fontFamily}
          >
            {carBrand} {carModel} {carModelYear}
          </Styled.CardTitle>
          <Styled.CardLightText
            isAr={lng === "ar" ? true : false}
            fontFamily={fontFamily}
          >
            {motorType === "manual" ? i18n.t("manual") : i18n.t("Automatic")}
          </Styled.CardLightText>
          <Styled.CardLightText
            isAr={lng === "ar" ? true : false}
            fontFamily={fontFamily}
          >
            {location}
          </Styled.CardLightText>
          <Styled.CardLightText
            isAr={lng === "ar" ? true : false}
            fontFamily={fontFamily}
          >
            {pricePerDay} {i18n.t("rental.pricePerDay")}
          </Styled.CardLightText>
        </View>
      </Styled.Flex>
    </Styled.CardContainer>
  );
}

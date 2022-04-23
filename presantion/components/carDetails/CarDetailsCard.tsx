import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Styled from "./style";
import { carSchema } from "../../../application/rental/state";
import { useAppState } from "../../../config";
import i18n from "../../../config/i18n/config";
export default function CarDetailsCard({
  images,
  carBrand,
  carModel,
  carModelYear,
  pricePerDay,
  location,
  motorType,
}: carSchema) {
  const {
    theme: { fontFamily },
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
          <Styled.CardTitle fontFamily={fontFamily}>
            {carBrand} {carModel} {carModelYear}
          </Styled.CardTitle>
          <Styled.CardLightText fontFamily={fontFamily}>
            {motorType === "manual" ? i18n.t("manual") : i18n.t("Automatic")}
          </Styled.CardLightText>
          <Styled.CardLightText fontFamily={fontFamily}>
            {" "}
            {location}
          </Styled.CardLightText>
          <Styled.CardLightText fontFamily={fontFamily}>
            {" "}
            {pricePerDay} {i18n.t("rental.pricePerDay")}
          </Styled.CardLightText>
        </View>
      </Styled.Flex>
      <Styled.CardRegularText fontFamily={fontFamily}>
        {i18n.t("carDetails.moreImages")}
      </Styled.CardRegularText>
      <Styled.ImagesContainer>
        {images.map((image, index) => (
          <Styled.CardPreview
            key={index}
            source={{
              uri: image,
            }}
          />
        ))}
      </Styled.ImagesContainer>
    </Styled.CardContainer>
  );
}

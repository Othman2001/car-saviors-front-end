import { View, ScrollView } from "react-native";
// @ts-ignore
import React, { useState } from "react";
import * as Styled from "./style";
import { carSchema } from "../../../application/rental/state";
import { StyleSheet } from "react-native";
import { Spinner } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useAppState } from "../../../config";
import i18n from "../../../config/i18n/config";
// @ts-ignore

const sedan = require("../../../assets/sedan.png");
const suv = require("../../../assets/suv.png");
const coupe = require("../../../assets/car.png");

interface IRentalCars {
  cars: [carSchema] | null;
}

export default function RentalCars({ cars }: IRentalCars) {
  const navigation = useNavigation();
  // @ts-ignore
  const [filterdCars, setFilterdCars] = useState<[carSchema] | undefined>(cars);
  const {
    theme: { fontFamily },
  } = useAppState();
  const handleSearch = (text: string) => {
    const newCars = cars?.filter((car) =>
      car.carBrand.toLowerCase().includes(text.toLowerCase())
    );
    // @ts-ignore
    setFilterdCars(newCars);
  };
  return (
    <View>
      <Styled.RentalTitle fontFamily={fontFamily}>
        {" "}
        {i18n.t("AvaliableForRental")}
      </Styled.RentalTitle>
      <Styled.SearchInput onChangeText={(text) => handleSearch(text)} />
      <ScrollView>
        {cars ? (
          filterdCars.map((car: carSchema) => (
            <Styled.RentalCarCard
              onPress={() => navigation.navigate("RentalCarDetails", { car })}
              key={car.carId}
            >
              <Styled.RentalCarCardContainer>
                <View>
                  <Styled.RentalCardTitle fontFamily={fontFamily}>
                    {" "}
                    {car.carBrand}
                  </Styled.RentalCardTitle>
                  <Styled.RentalCardLightText>
                    {car.carModel} {car.carModelYear}
                  </Styled.RentalCardLightText>
                  <Styled.RentalCardLightText
                    style={{
                      right: 6,
                      marginBottom: 16,
                    }}
                  >
                    {" "}
                    {car.pricePerDay} {i18n.t("rental.pricePerDay")}
                  </Styled.RentalCardLightText>
                </View>
                <Styled.RentalCardImageContainer>
                  <Styled.RentalCardImage
                    source={car.carType === "sedan" ? sedan : suv}
                  />
                </Styled.RentalCardImageContainer>
              </Styled.RentalCarCardContainer>
            </Styled.RentalCarCard>
          ))
        ) : (
          <Spinner />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});

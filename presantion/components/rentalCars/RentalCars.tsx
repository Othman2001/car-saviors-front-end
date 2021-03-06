import { View, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { carSchema } from "../../../application/rental/state";
import { Spinner } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import i18n from "../../../config/i18n/config";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import { useTheme } from "../../../application/custom-hooks/useTheme";

const carsImages = {
  sedan: {
    image: require("../../../assets/sedan.png"),
  },
  suv: {
    image: require("../../../assets/suv.png"),
  },
  coupe: {
    image: require("../../../assets/car.png"),
  },
};

interface IRentalCars {
  cars: [carSchema] | null;
}
const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function RentalCars({ cars }: IRentalCars) {
  const navigation = useNavigation();
  const { fetchCars } = useRentalActions();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    fetchCars();
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  // @ts-ignore
  const [filteredCars, setFilteredCars] = useState<[carSchema] | undefined>(
    cars
  );
  const { fontFamily, lng } = useTheme();
  const handleSearch = (text: string) => {
    const newCars = cars?.filter((car) =>
      car.carBrand.toLowerCase().includes(text.toLowerCase())
    );
    // @ts-ignore
    setFilteredCars(newCars);
  };
  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);
  return (
    <View
      style={{
        marginBottom: 30,
      }}
    >
      <Styled.RentalTitle
        isAr={lng === "ar" ? true : false}
        fontFamily={fontFamily}
      >
        {i18n.t("AvaliableForRental")}
      </Styled.RentalTitle>
      <Styled.SearchInput onChangeText={(text) => handleSearch(text)} />
      <ScrollView
        style={{
          marginBottom: 30,
          paddingBottom: 100,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {cars ? (
          filteredCars?.map((car: carSchema) => (
            <Styled.RentalCarCard
              onPress={() => navigation.navigate("RentalCarDetails", { car })}
              key={car.carId}
            >
              <Styled.RentalCarCardContainer>
                <View>
                  <Styled.RentalCardTitle
                    isAr={lng === "ar" ? true : false}
                    fontFamily={fontFamily}
                  >
                    {" "}
                    {car.carBrand}
                  </Styled.RentalCardTitle>
                  <Styled.RentalCardLightText
                    isAr={lng === "ar" ? true : false}
                    fontFamily={fontFamily}
                  >
                    {car.carModel} {car.carModelYear}
                  </Styled.RentalCardLightText>
                  <Styled.RentalCardLightText
                    isAr={lng === "ar" ? true : false}
                    fontFamily={fontFamily}
                    style={{
                      right: 6,
                      marginBottom: 16,
                    }}
                  >
                    {car.pricePerDay} {i18n.t("rental.pricePerDay")}
                  </Styled.RentalCardLightText>
                </View>
                <Styled.RentalCardImageContainer>
                  <Styled.RentalCardImage
                    // @ts-ignore
                    source={carsImages[car.carType].image}
                  />
                </Styled.RentalCardImageContainer>
              </Styled.RentalCarCardContainer>
            </Styled.RentalCarCard>
          ))
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 200,
            }}
          >
            <Spinner />
          </View>
        )}
        <Styled.Space />
      </ScrollView>
    </View>
  );
}

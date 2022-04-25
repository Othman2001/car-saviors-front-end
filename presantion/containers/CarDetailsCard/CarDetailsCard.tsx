import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppState } from "../../../config";
import CarDetailsCardComponent from "../../components/carDetails/CarDetailsCard";
import { carSchema } from "../../../application/rental/state";
import { useTheme } from "../../../application/custom-hooks/useTheme";
export default function CarDetailsCard({
  images,
  carBrand,
  carModel,
  carModelYear,
  pricePerDay,
  location,
  motorType,
}: carSchema) {
  const { fontFamily } = useTheme();
  return (
    <CarDetailsCardComponent
      carBrand={carBrand}
      carModel={carModel}
      carModelYear={carModelYear}
      pricePerDay={pricePerDay}
      location={location}
      motorType={motorType}
      fontFamily={fontFamily}
      images={images}
    />
  );
}

const styles = StyleSheet.create({});

import { StyleSheet, View, Platform, Image } from "react-native";
// @ts-ignore
import React from "react";
import RentalSearch from "../../components/rentalSearch/RentalSearch";
import RentalCars from "../../containers/RentalCars/RentalCars";
import { Layout } from "@ui-kitten/components";
import TopHeader from "../../components/common/topHeader";

export default function RentScreen() {
  return (
    <Layout
      style={{
        flex: 1,
        backgroundColor: "#ebebeb",
        paddingTop: 60,
      }}
    >
      <TopHeader />
      <RentalCars />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 0 : 10,
  },
});

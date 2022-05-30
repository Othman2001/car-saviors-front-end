// @ts-ignore
import React, { useEffect } from "react";
import { UIManager, LayoutAnimation } from "react-native";
import RentalCars from "../../containers/RentalCars/RentalCars";
import { Layout } from "@ui-kitten/components";
import TopHeader from "../../components/common/topHeader";

export default function RentScreen() {
  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }, []);
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

import { SafeAreaView, View } from "react-native";
import React, { useEffect } from "react";
import TopHeader from "../../components/common/topHeader";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import BrandCard from "../../containers/BrandCard/BrandCard";
import { useActions } from "../../../config";
import i18n from "../../../config/i18n/config";

export default function Brands() {
  const { fontFamily } = useTheme();
  const {
    workshops: { fetchBrands },
  } = useActions();
  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <View>
      <TopHeader />
      <SafeAreaView>
        <Styled.Title fontFamily={fontFamily}>
          {i18n.t("workshops.brandsTitle")}
        </Styled.Title>
        <BrandCard />
      </SafeAreaView>
    </View>
  );
}

import { StyleSheet } from "react-native";
import { Divider } from "@ui-kitten/components";
import React from "react";
import * as Styled from "./style";
import { useAppState } from "../../../config";
import i18n from "../../../config/i18n/config";

interface ICarTable {
  carName: string;
  price: number;
}

export default function CarTable({ carName, price }: ICarTable) {
  const {
    theme: { fontFamily, lng },
    rental: { daysCount, totalPrice, rentalPrice },
  } = useAppState();

  return (
    <Styled.TableContainer>
      <Styled.pricingTable>
        <Styled.CarBrand
          isAr={lng === "ar" ? true : false}
          fontFamily={fontFamily}
        >
          {carName}{" "}
        </Styled.CarBrand>
        <Styled.FlexTable>
          <Styled.CardRegularText
            isAr={lng === "ar" ? true : false}
            fontFamily={fontFamily}
          >
            {daysCount} {i18n.t("days")}{" "}
          </Styled.CardRegularText>
          <Styled.Price
            fontFamily={fontFamily}
            isAr={lng === "ar" ? true : false}
          >
            {" "}
            {rentalPrice} {i18n.t("pricPerDay")}{" "}
          </Styled.Price>
        </Styled.FlexTable>
        <Styled.FlexTable>
          <Styled.CardRegularText
            isAr={lng === "ar" ? true : false}
            fontFamily={fontFamily}
          >
            {i18n.t("insurance")}
          </Styled.CardRegularText>
          <Styled.Price
            isAr={lng === "ar" ? true : false}
            fontFamily={fontFamily}
          >
            1000 {i18n.t("pricPerDay")}{" "}
          </Styled.Price>
        </Styled.FlexTable>
        <Divider style={styles.divider} />
        <Styled.FlexTable>
          <Styled.CardRegularText fontFamily={fontFamily}>
            {i18n.t("total")}
          </Styled.CardRegularText>
          <Styled.Price
            isAr={lng === "ar" ? true : false}
            fontFamily={fontFamily}
          >
            {totalPrice}
            {i18n.t("pricPerDay")}{" "}
          </Styled.Price>
        </Styled.FlexTable>
      </Styled.pricingTable>
    </Styled.TableContainer>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 15,
    marginBottom: 4,
    width: "80%",
    marginLeft: 30,
  },
});

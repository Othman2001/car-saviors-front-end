import { StyleSheet } from "react-native";
import { Divider } from "@ui-kitten/components";
import React from "react";
import * as Styled from "./style";
import { useAppState } from "../../../config";
import i18n from "../../../config/i18n/config";

interface ICarTable {
  carName: string;
  daysCount: number;
  price: number;
  total: number;
}

export default function CarTable({
  carName,
  daysCount,
  price,
  total,
}: ICarTable) {
  const {
    theme: { fontFamily },
  } = useAppState();
  return (
    <Styled.TableContainer>
      <Styled.pricingTable>
        <Styled.CarBrand fontFamily={fontFamily}>{carName} </Styled.CarBrand>
        <Styled.FlexTable>
          <Styled.CardRegularText fontFamily={fontFamily}>
            {daysCount} {i18n.t("days")}{" "}
          </Styled.CardRegularText>
          <Styled.Price>
            {" "}
            {price} {i18n.t("pricPerDay")}{" "}
          </Styled.Price>
        </Styled.FlexTable>
        <Styled.FlexTable>
          <Styled.CardRegularText fontFamily={fontFamily}>
            {i18n.t("insurance")}
          </Styled.CardRegularText>
          <Styled.Price>1000 {i18n.t("pricPerDay")} </Styled.Price>
        </Styled.FlexTable>
        <Divider style={styles.divider} />
        <Styled.FlexTable>
          <Styled.CardRegularText fontFamily={fontFamily}>
            {i18n.t("total")}
          </Styled.CardRegularText>
          <Styled.Price>
            {total}
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

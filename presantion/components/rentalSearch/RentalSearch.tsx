import { StyleSheet, Text, View } from "react-native";
// @ts-ignore
import React from "react";
import * as Styled from "./style";
import i18n from "../../../config/i18n/config";

export default function RentalSearch() {
  return (
    <View>
      <Styled.SearchInput placeholder={i18n.t("search Here")} />
    </View>
  );
}

const styles = StyleSheet.create({});

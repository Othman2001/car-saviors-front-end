import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import CardsComponent from "../../components/Cards/Cards";
import carOwnerSchema from "./cardsSchema";
import cardsSchema from "./carOwnerSchema";
export default function Cards() {
  const { currentUserRole } = useUserInfo();
  const { fontFamily } = useTheme();
  return (
    <CardsComponent
      carOwnerSchema={carOwnerSchema}
      cardsSchema={cardsSchema}
      currentUserRole={currentUserRole}
      fontFamily={fontFamily}
    />
  );
}

const styles = StyleSheet.create({});

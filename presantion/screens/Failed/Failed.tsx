import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import Animation from "./Animation";

export const Failed = () => {
  const { resetState } = useRentalActions();
  const { lng } = useTheme();
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      resetState();
      lng === "en"
        ? alert("Car Is already booked in this date")
        : "السيارة محجوزة بالفعل في هذا التاريخ";
      // replace screen to rental
      navigation.dispatch(StackActions.replace("Rental"));
    }, 3000);
  }, []);
  return <Animation />;
};

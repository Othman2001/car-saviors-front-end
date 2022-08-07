import React, { useEffect } from "react";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import Animation from "./Animation";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../application/custom-hooks/useTheme";

export default function Success() {
  const { resetState } = useRentalActions();
  const navigation = useNavigation();
  const { lng } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      resetState();
      lng === "en"
        ? alert("Car is Booked Successfully ")
        : alert("تم حجز السيارة بنجاح");

      navigation.dispatch(StackActions.replace("Rent"));
    }, 2000);
  }, []);
  return <Animation />;
}

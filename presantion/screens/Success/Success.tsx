import React, { useEffect } from "react";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";
import Animation from "./Animation";
import { StackActions, useNavigation } from "@react-navigation/native";

export default function Success() {
  const { resetState } = useRentalActions();
  const { message } = useRentalState();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      resetState();
      navigation.dispatch(StackActions.replace("Rent"));
    }, 2000);
  }, []);
  return <Animation />;
}

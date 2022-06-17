import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import Animation from "./Animation";

export const Failed = () => {
  const { resetState } = useRentalActions();
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      resetState();

      // replace screen to rental
      navigation.dispatch(StackActions.replace("Rental"));
    }, 3000);
  }, []);
  return <Animation />;
};

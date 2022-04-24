import { Alert, StyleSheet, Text, View } from "react-native";
import Success from "./Sucess";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";
import { useActions } from "../../../config";

export default function Confirm() {
  const [animationVisitable, setAnimationVisitable] = useState(true);
  const navigation = useNavigation();
  const { message, error } = useRentalState();
  const {
    rental: { resetState },
  } = useActions();

  useEffect(() => {
    // @ts-ignore
    if (error) {
      alert(error);
    }
    if (message) {
      alert(message);
    }

    setTimeout(() => {
      setAnimationVisitable(false);
      navigation.navigate("Rent");
      resetState();
    }, 7000);
  }, [message]);

  return (
    <View style={{ flex: 1 }}>
      {animationVisitable ? <Success isError={error ? true : false} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
    flex: 1,
  },
});

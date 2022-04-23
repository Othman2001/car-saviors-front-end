import { StyleSheet, Text, View } from "react-native";
import Success from "./Sucess";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";

export default function Confirm() {
  const [animationVisitable, setAnimationVisitable] = useState(true);
  const navigation = useNavigation();
  const { message } = useRentalState();

  useEffect(() => {
    // @ts-ignore
    alert(message.message);
    setTimeout(() => {
      setAnimationVisitable(false);
      navigation.navigate("Rent");
    }, 10000);
  }, [message]);

  return (
    <View style={{ flex: 1 }}>{animationVisitable ? <Success /> : null}</View>
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

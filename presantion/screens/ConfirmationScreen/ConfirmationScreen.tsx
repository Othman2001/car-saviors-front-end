import { Alert, StyleSheet, Text, View } from "react-native";
import Success from "./Sucess";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useActions } from "../../../config";

export default function Confirm() {
  const [animationVisitable, setAnimationVisitable] = useState(true);
  const navigation = useNavigation();
  const {
    rental: { resetState },
  } = useActions();

  useEffect(() => {
    setTimeout(() => {
      setAnimationVisitable(false);
      navigation.navigate("Rent");
      resetState();
    }, 2000);
  }, []);

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

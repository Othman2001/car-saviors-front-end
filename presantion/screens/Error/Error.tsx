import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LottieWrapper from "./Lottie";
import { useNavigation } from "@react-navigation/native";

export default function Error() {
  const [isAnimationVisitable, setAnimationVisibility] = useState(false);
  const { navigate } = useNavigation();
  useEffect(() => {
    setAnimationVisibility(true);
    setTimeout(() => {
      setAnimationVisibility(false);
      navigate("Rent");
    }, 2000);
  }, []);
  return <View>{isAnimationVisitable ? <LottieWrapper /> : null}</View>;
}

const styles = StyleSheet.create({});

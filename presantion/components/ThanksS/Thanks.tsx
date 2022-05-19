import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animation from "./Animation";

export default function Thanks() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState("true");
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      navigation.navigate("Home");
    }, 3000);
  });
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isVisible && <Animation />}
    </View>
  );
}

const styles = StyleSheet.create({});

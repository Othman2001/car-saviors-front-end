import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animation from "./Animation";
import { useActions } from "../../../config";

export default function Rejected() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState("true");
  const {
    winch: { getTheNextDriver },
  } = useActions();
  useEffect(() => {
    setTimeout(() => {
      getTheNextDriver();
      navigation.navigate("MapUser");
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

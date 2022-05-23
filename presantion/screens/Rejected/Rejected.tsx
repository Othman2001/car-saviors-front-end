import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animation from "./Animation";
import { useActions } from "../../../config";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";

export default function Rejected() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState("true");
  const {
    winch: { getTheNextDriver },
  } = useActions();
  const { winchDrivers } = useWinchState();
  useEffect(() => {
    getTheNextDriver();
    winchDrivers ? navigation.navigate("MapUser") : navigation.navigate("Home");
  }, [winchDrivers]);
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

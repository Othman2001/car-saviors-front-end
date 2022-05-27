import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import LottieView from "lottie-react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
export default function Finished() {
  const animation = useRef(null);
  const { finishTheTrip } = useWinchActions();
  const navigation = useNavigation();

  useEffect(() => {
    finishTheTrip();
    navigation.navigate("Home");
  }, []);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./check.json")}
      />
      <Text> the current trip finished, Go back to make new trip </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#265A60",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

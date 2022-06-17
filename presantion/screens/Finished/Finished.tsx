import { SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../../infstracture/firebase";
import { setDoc, deleteDoc, doc } from "firebase/firestore";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";

export default function Finished() {
  const animation = useRef(null);
  const { currentWinchDriverId } = useWinchState();
  const { finishTheTrip, resetTheStore } = useWinchActions();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      finishTheTrip();
      const pendingRequest = doc(db, "PendingRequets", currentWinchDriverId);
      deleteDoc(pendingRequest);
      const finishedRequest = doc(
        db,
        "FinishedRequets",
        `${currentWinchDriverId}${Date.now()}`
      );
      setDoc(finishedRequest, {
        isFinished: true,
        driverId: currentWinchDriverId,
      });
      resetTheStore();
      navigation.navigate("Home");
    }, 2000);
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

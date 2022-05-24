import { SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useNavigation } from "@react-navigation/native";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";

export default function Loading() {
  const { currentWinchDriverId, winchDrivers } = useWinchState();
  const { getTheNextDriver, setWinchDriverId } = useWinchActions();

  const navigation = useNavigation();
  useEffect(() => {
    if (currentWinchDriverId != "fake") {
      if (winchDrivers[0]) {
        setTimeout(() => {
          // @ts-ignore
          setWinchDriverId({ winchDriverId: winchDrivers[0].id });
          getTheNextDriver();
          // @ts-ignore
          navigation.navigate("MapUser");
        }, 1500);
      } else {
        setTimeout(() => {
          // @ts-ignore
          alert("no drivers available");
        }, 1000);
      }
    }
  }, []);
  return (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
}

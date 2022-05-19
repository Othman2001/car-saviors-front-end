import { StyleSheet, Text, View } from "react-native";
// @ts-ignore
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Location from "../../components/LocationComponent/Location";
import TopHeader from "../../components/common/topHeader";
import { useActions, useAppState } from "../../../config";

export default function WinchScreen() {
  const {
    winch: { fetchDrivers },
  } = useActions();
  const {
    winch: { origin, destination },
  } = useAppState();
  useEffect(() => {
    if (origin && destination) {
      fetchDrivers({ lat: origin.lat, lng: origin.lng });
    }
  }, [origin, destination]);
  return (
    <SafeAreaView>
      <TopHeader />
      <Location />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

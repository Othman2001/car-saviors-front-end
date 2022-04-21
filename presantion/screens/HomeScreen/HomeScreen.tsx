import { View, Text, SafeAreaView, StyleSheet } from "react-native";
// @ts-ignore
import React from "react";
import { Platform } from "react-native";
import UserHeader from "../../components/userHeader/UserHeader";
import Cards from "../../components/Cards/Cards";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <UserHeader />
      </View>
      <View>
        <Cards />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 0 : 10,
  },
});

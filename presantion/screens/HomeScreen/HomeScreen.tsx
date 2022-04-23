import { View, Text, SafeAreaView, StyleSheet } from "react-native";
// @ts-ignore
import React from "react";
import { Platform } from "react-native";
import UserHeader from "../../containers/UserHeader/UserHeader";
import Cards from "../../components/Cards/Cards";
import { Layout } from "@ui-kitten/components";

export default function HomeScreen() {
  return (
    <Layout
      style={{
        flex: 1,
        backgroundColor: "#E5E5E5",
      }}
    >
      <SafeAreaView>
        <View>
          <UserHeader />
        </View>

        <View>
          <Cards />
        </View>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 0 : 10,
  },
});

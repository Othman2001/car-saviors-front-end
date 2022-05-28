import { View, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import UserHeader from "../../containers/UserHeader/UserHeader";
import Cards from "../../containers/Cards/Cards";
import { Layout } from "@ui-kitten/components";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";

export default function HomeScreen() {
  const { clearFields } = useWinchActions();
  useEffect(() => {
    clearFields();
  }, []);
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
        <Cards />
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 0 : 10,
  },
});

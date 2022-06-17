import { View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { UIManager, LayoutAnimation } from "react-native";
import UserHeader from "../../containers/UserHeader/UserHeader";
import Cards from "../../containers/Cards/Cards";
import { Layout } from "@ui-kitten/components";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";

export default function HomeScreen() {
  const { clearFields } = useWinchActions();
  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
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

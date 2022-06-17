import { SafeAreaView } from "react-native";
import React from "react";
import TopHeader from "../../components/common/topHeader";
import { ScrollView } from "react-native-gesture-handler";
import OfferForm from "../../containers/OfferForm/OfferForm";

export default function OfferScreen() {
  return (
    <SafeAreaView>
      <TopHeader />
      <ScrollView>
        <OfferForm />
      </ScrollView>
    </SafeAreaView>
  );
}

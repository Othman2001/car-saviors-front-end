import { SafeAreaView, UIManager, LayoutAnimation } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useWorkshopsActions } from "../../../application/custom-hooks/useWorkshopsAction";
import WorkshopCard from "../../containers/WorkshopCard/WorkshopCard";
import TopHeader from "../../components/common/topHeader";
import {
  getFirestore,
  collection,
  collectionGroup,
  doc,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Workshops() {
  const routes = useRoute();
  const { fetchWorkshops } = useWorkshopsActions();
  //   @ts-ignore
  const brandName = routes.params?.brandName;
  //   @ts-ignore
  const brandImage = routes.params?.brandImage;
  useEffect(() => {
    const db = getFirestore();
    fetchWorkshops({ brandName });
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }, []);
  return (
    <SafeAreaView>
      <TopHeader />
      <WorkshopCard brandImage={brandImage} />
    </SafeAreaView>
  );
}

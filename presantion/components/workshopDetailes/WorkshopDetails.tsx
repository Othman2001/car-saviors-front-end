import { useRoute } from "@react-navigation/native";
import React from "react";
import WorkShopDetailsContainer from "../../containers/WorkshopDetails/workshopDetails";

export default function WorkshopDetails() {
  const route = useRoute();
  const brandImage = route?.params?.brandImage;
  return <WorkShopDetailsContainer brandImage={brandImage} />;
}

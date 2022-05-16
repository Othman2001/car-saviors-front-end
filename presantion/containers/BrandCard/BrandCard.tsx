import BrandCardComponent from "../../components/brandCard/BrandCards";
import React from "react";
import { useWorkshopState } from "../../../application/custom-hooks/useWorkshopsState";

export default function BrandCard() {
  const { brands } = useWorkshopState();
  return <BrandCardComponent brands={brands} />;
}

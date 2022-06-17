import WorkshopCardComponent from "../../components/workshopsCard/WorkshopCard";
import React from "react";
import { useWorkshopState } from "../../../application/custom-hooks/useWorkshopsState";

interface IWorkshopCard {
  brandImage: string;
}
export default function WorkshopCard({ brandImage }: IWorkshopCard) {
  const { workshops } = useWorkshopState();
  return (
    <WorkshopCardComponent workshops={workshops} brandImage={brandImage} />
  );
}

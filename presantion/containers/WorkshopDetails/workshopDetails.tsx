import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { useWorkshopsActions } from "../../../application/custom-hooks/useWorkshopsAction";
import { useWorkshopState } from "../../../application/custom-hooks/useWorkshopsState";
import { workshopSchema } from "../../../application/workshops/types";
import WorkShopDetailsComponent from "../../components/workshopDetails/WorkShopDetailsComponent";

interface IWorkshopDetailsProps {
  brandImage: string;
}

export default function WorkshopDetails({ brandImage }: IWorkshopDetailsProps) {
  const { getReviews } = useWorkshopsActions();
  const { user } = useUserInfo();

  const { workshops } = useWorkshopState();
  const [reviews, setReviews] = useState<any>();

  const route = useRoute();
  const workshop: workshopSchema = route?.params?.workshop;
  useEffect(() => {}, []);

  return (
    <WorkShopDetailsComponent
      userId={user?.uid}
      userName={user?.displayName}
      description={workshop.description}
      descriptionAr={workshop.descriptionAr}
      brandImage={brandImage}
      workshopName={workshop.name}
    />
  );
}

import React from "react";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { useWorkshopsActions } from "../../../application/custom-hooks/useWorkshopsAction";
import { useWorkshopState } from "../../../application/custom-hooks/useWorkshopsState";
import WorkShopDetailsComponent from "../../components/workshopDetails/WorkShopDetailsComponent";

interface IWorkshopDetailsProps {
  brandImage: string;
}

export default function WorkshopDetails({ brandImage }: IWorkshopDetailsProps) {
  const { bookDate } = useWorkshopsActions();
  const { user } = useUserInfo();
  const { workshops } = useWorkshopState();
  return (
    <WorkShopDetailsComponent
      bookDate={bookDate}
      userId={user?.uid}
      userName={user?.displayName}
      description={workshops[0].description}
      descriptionAr={workshops[0].descriptionAr}
      brandImage={brandImage}
    />
  );
}

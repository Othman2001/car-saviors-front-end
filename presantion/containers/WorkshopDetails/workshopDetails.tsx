import React from "react";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { useWorkshopsActions } from "../../../application/custom-hooks/useWorkshopsAction";
import WorkShopDetailsComponent from "../../components/workshopDetails/WorkShopDetailsComponent";

export default function workshopDetails() {
  const { bookDate } = useWorkshopsActions();
  const { user } = useUserInfo();
  return (
    <WorkShopDetailsComponent
      bookDate={bookDate}
      userId={user?.uid}
      userName={user?.displayName}
    />
  );
}

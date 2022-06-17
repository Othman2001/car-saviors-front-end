import OfferFormComponent from "../../components/offerForm/OfferForm";
import React from "react";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";

export default function OfferForm() {
  const { registerAsCarOwner } = useRentalActions();
  const { fontFamily } = useTheme();
  const { user } = useUserInfo();

  return (
    <OfferFormComponent
      user={user}
      registerAsCarOwner={registerAsCarOwner}
      fontFamily={fontFamily}
    />
  );
}

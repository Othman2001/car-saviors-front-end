import React, { useEffect, useRef, useState } from "react";
import TopHeader from "../common/topHeader";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { Button } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { ReviewSchema } from "../../../application/workshops/types";
import i18n from "../../../config/i18n/config";
import { TextInput } from "react-native-gesture-handler";
import { doc, getFirestore } from "@firebase/firestore";

interface IWorkshopDetailsProps {
  userId: string | undefined;
  userName: string | null | undefined;
  description: string;
  descriptionAr: string;
  brandImage: string;
  workshopName: string;
}

export default function WorkShopDetailsComponent({
  brandImage,
  description,
  descriptionAr,
  workshopName,
}: IWorkshopDetailsProps) {
  const { fontFamily, lng } = useTheme();
  const [comment, setComment] = useState<string>();

  useEffect(() => {
    console.log(comment, "comment");
  }, []);

  return (
    <Styled.WorkshopDetailsContainer>
      <TopHeader />
      <ScrollView>
        <Styled.ScreenTitle
          isAr={lng === "ar" ? true : false}
          fontFamily={fontFamily}
        >
          {i18n.t("workshopDetails.Summary")}
        </Styled.ScreenTitle>
        <Styled.WorkshopContainer isAr={lng === "ar" ? true : false}>
          <Styled.WorkshopTitle
            fontFamily={fontFamily}
            isAr={lng === "ar" ? true : false}
          >
            {workshopName}
          </Styled.WorkshopTitle>
          <Styled.BrandImage
            source={{
              uri: brandImage,
            }}
          />
        </Styled.WorkshopContainer>
        <Styled.WorkShopDescription
          isAr={lng === "ar" ? true : false}
          fontFamily={fontFamily}
        >
          {lng === "ar" ? descriptionAr : description}
        </Styled.WorkShopDescription>
      </ScrollView>
    </Styled.WorkshopDetailsContainer>
  );
}

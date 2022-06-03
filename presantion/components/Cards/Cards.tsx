import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { FlexContainer } from "../common/style";
import { useNavigation } from "@react-navigation/native";
import i18n from "../../../config/i18n/config";
import { useTheme } from "../../../application/custom-hooks/useTheme";

interface ICardsProps {
  currentUserRole: string;
  fontFamily: string;
  carOwnerSchema: Object;
  cardsSchema: Object;
}
export default function Cards({
  currentUserRole,
  fontFamily,
  carOwnerSchema,
  cardsSchema,
}: ICardsProps) {
  const { navigate } = useNavigation();
  const [schemaType, setSchema] = useState<any>();
  const { lng } = useTheme();

  useEffect(() => {
    if (currentUserRole === "car-owner") {
      setSchema(carOwnerSchema);
      console.log(carOwnerSchema, "car owner");
    } else {
      setSchema(cardsSchema);
      console.log(cardsSchema, "user");
    }
  }, []);
  return (
    <ScrollView>
      <Styled.CardContainer>
        {schemaType?.map((feat: any) => (
          <Styled.Card
            key={feat.id}
            onPress={() => {
              navigate(feat.route);
            }}
          >
            <Styled.CardImage source={feat.icon} />
            <FlexContainer>
              <Styled.CardTitle
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {i18n.currentLocale() === "ar" ? feat.arText : feat.text}
              </Styled.CardTitle>
            </FlexContainer>
          </Styled.Card>
        ))}
      </Styled.CardContainer>
    </ScrollView>
  );
}

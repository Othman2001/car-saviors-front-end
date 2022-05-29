import React from "react";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { Button } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { WinchDriverSchema } from "../../../application/winch/types";
import { updateData } from "../../../helpers/updateData";
import { useNavigation } from "@react-navigation/native";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import i18n from "../../../config/i18n/config";

interface IWinchDriverContainer {
  travelTimeInformation: any;
  winchDrivers: WinchDriverSchema[] | [];
  price: number;
  setWinchDriverId: (payload: { winchDriverId: string }) => void;
}

export default function WinchDriver({
  winchDrivers,
  travelTimeInformation,
  price,
}: IWinchDriverContainer) {
  const { fontFamily, lng } = useTheme();

  return (
    <ScrollView>
      <Styled.Container>
        <Styled.CardsContainer>
          <Styled.Card>
            <Styled.CardImage source={require("../../../assets/phone.png")} />
            <Styled.CardText
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {winchDrivers[0]?.phoneNumber}
            </Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardImage source={require("../../../assets/time.png")} />
            <Styled.CardText
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {travelTimeInformation && travelTimeInformation?.duration.text}
            </Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardImage source={require("../../../assets/cost.jpg")} />
            <Styled.CardText
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {price && price}
              {i18n.t("EGB")}
            </Styled.CardText>
          </Styled.Card>
        </Styled.CardsContainer>
        <Styled.RejectButtonContainer>
          <Button
            status="danger"
            onPress={() => {
              updateData({
                docId: winchDrivers[0].id,
                collectionName: "PendingRequets",
                filedName: "isAcccepted",
                newValue: false,
              });
            }}
          >
            {i18n.t("Reject")}
          </Button>
        </Styled.RejectButtonContainer>
      </Styled.Container>
    </ScrollView>
  );
}

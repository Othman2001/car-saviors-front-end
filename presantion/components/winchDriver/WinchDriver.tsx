import React from "react";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { Button } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { WinchDriverSchema } from "../../../application/winch/types";
import { updateData } from "../../../helpers/updateData";
import { useNavigation } from "@react-navigation/native";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";

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
  setWinchDriverId,
}: IWinchDriverContainer) {
  const { fontFamily } = useTheme();
  const navigation = useNavigation();
  const { setRejection } = useWinchActions();

  return (
    <ScrollView>
      <Styled.Container>
        <Styled.CardsContainer>
          <Styled.Card>
            <Styled.CardImage source={require("../../../assets/phone.png")} />
            <Styled.CardText fontFamily={fontFamily}>
              {winchDrivers[0]?.phoneNumber}
            </Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardImage source={require("../../../assets/time.png")} />
            <Styled.CardText fontFamily={fontFamily}>
              {travelTimeInformation && travelTimeInformation?.duration.text}
            </Styled.CardText>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardImage source={require("../../../assets/cost.jpg")} />
            <Styled.CardText fontFamily={fontFamily}>
              {price && price}
              L.E
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
            Cancel
          </Button>
        </Styled.RejectButtonContainer>
      </Styled.Container>
    </ScrollView>
  );
}

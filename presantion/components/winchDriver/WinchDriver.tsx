import React from "react";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";

export default function WinchDriver() {
  const { fontFamily } = useTheme();
  const { travelTimeInformation, winchDrivers, price } = useWinchState();
  return (
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
          {/* {travelTimeInformation?.duration.text} */}
        </Styled.CardText>
      </Styled.Card>
      <Styled.Card>
        <Styled.CardImage source={require("../../../assets/cost.jpg")} />
        <Styled.CardText fontFamily={fontFamily}>{price}</Styled.CardText>
      </Styled.Card>
    </Styled.CardsContainer>
  );
}

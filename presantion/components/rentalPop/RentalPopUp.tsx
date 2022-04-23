import { StyleSheet, Text, View } from "react-native";
// @ts-ignore
import React from "react";
import * as Styled from "./style";
import { useAppState } from "../../../config";

export default function RentalPopUp() {
  const {
    theme: { fontFamily },
  } = useAppState();
  return (
    <Styled.PopUp>
      <Styled.PopUpTitle fontFamily={fontFamily}>
        Offer your car for rent{" "}
      </Styled.PopUpTitle>
      <Styled.PopUpText fontFamily={fontFamily}>
        you can offer your car by providing us with information about your car ,
        uploading your car images and your phone number so we can contact you.
      </Styled.PopUpText>
      <Styled.PopUpButtonContainer>
        <Styled.PopUpButton>
          <Styled.PopUpButtonText fontFamily={fontFamily}>
            Click Here
          </Styled.PopUpButtonText>
        </Styled.PopUpButton>
      </Styled.PopUpButtonContainer>
    </Styled.PopUp>
  );
}

const styles = StyleSheet.create({});

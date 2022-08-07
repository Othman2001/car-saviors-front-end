import { StyleSheet, Text, View } from "react-native";
import * as Styled from "./style";
import React, { useEffect } from "react";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";
import i18n from "../../../config/i18n/config";
import { ScrollView } from "react-native-gesture-handler";

export default function RequestCard() {
  const { fontFamily, lng } = useTheme();
  const { requests } = useRentalState();
  useEffect(() => {}, [requests]);
  return (
    <ScrollView>
      {!requests && <Text> No Requests in the moment</Text>}
      {requests?.map((request) => (
        <Styled.CardContainer>
          <Styled.CardFirstPart>
            <Styled.RequestId
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {request.id}
            </Styled.RequestId>
            <Styled.Label
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {i18n.t("retnal.total")}
              <Styled.Price
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {request.total}
              </Styled.Price>
            </Styled.Label>
            <Styled.Label
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {i18n.t("rental.phoneNumber")}: 01281084530
            </Styled.Label>
          </Styled.CardFirstPart>
          <Styled.CardSecondPart>
            <Styled.DateLabel
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {i18n.t("rental.from")}:
              <Styled.Date
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {new Date(request.dates[0]).toDateString()}
              </Styled.Date>
            </Styled.DateLabel>

            <Styled.DateLabel
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {i18n.t("rental.to")}:
              <Styled.Date
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {new Date(request.dates[request.daysCount]).toDateString()}
              </Styled.Date>
            </Styled.DateLabel>
          </Styled.CardSecondPart>
        </Styled.CardContainer>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

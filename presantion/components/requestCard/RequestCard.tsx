import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Styled from "./style";
import React, { useEffect } from "react";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { RentalRequestSchema } from "../../../application/rental/types";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";

export default function RequestCard() {
  const { fontFamily } = useTheme();
  const { requests } = useRentalState();
  useEffect(() => {
    console.log(requests, "from card");
  }, [requests]);
  return (
    <SafeAreaView>
      {requests?.map((request) => (
        <Styled.CardContainer>
          <Styled.CardFirstPart>
            <Styled.RequestId fontFamily={fontFamily}>
              {request.id}
            </Styled.RequestId>
            <Styled.Label fontFamily={fontFamily}>
              Total:
              <Styled.Price fontFamily={fontFamily}>
                {request.total}
              </Styled.Price>
            </Styled.Label>
            <Styled.Label fontFamily={fontFamily}>
              Phone Number: 01281084530
            </Styled.Label>
          </Styled.CardFirstPart>
          <Styled.CardSecondPart>
            <Styled.DateLabel fontFamily={fontFamily}>
              From:
              <Styled.Date fontFamily={fontFamily}>
                {new Date(request.dates[0]).toDateString()}
              </Styled.Date>
            </Styled.DateLabel>

            <Styled.DateLabel fontFamily={fontFamily}>
              To:
              <Styled.Date fontFamily={fontFamily}>
                {new Date(request.dates[request.daysCount]).toDateString()}
              </Styled.Date>
            </Styled.DateLabel>
          </Styled.CardSecondPart>
        </Styled.CardContainer>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

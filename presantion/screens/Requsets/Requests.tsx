import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  query,
  onSnapshot,
  where,
  collection,
  getFirestore,
} from "firebase/firestore";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { SafeAreaView } from "react-native-safe-area-context";
import RequestCard from "../../containers/ReqeustCard/RequestCard";
import { RentalRequestSchema } from "../../../application/rental/types";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";

export default function Requests() {
  const { user } = useUserInfo();
  const { setRentalRequest } = useRentalActions();
  const { requests } = useRentalState();

  useEffect(() => {
    // get the data of requests from firebase
    const db = getFirestore();
    const rentalRef = collection(db, "rental");
    const q = query(rentalRef, where("carOwnerId", "==", user?.uid));
    const rentalListener = onSnapshot(q, (snapshot) => {
      let Requests: RentalRequestSchema[] = [];
      snapshot.docs.forEach((doc) => {
        // @ts-ignore
        Requests.push({ ...doc.data(), id: doc.id });
      });
      // @ts-ignore
      setRentalRequest({ requests: Requests });
      console.log(requests, "Requests");
    });
    // start the listener
    return () => {
      rentalListener();
    };
    // end the listener
  }, []);
  const { fontFamily } = useTheme();
  return (
    <SafeAreaView>
      <Styled.Title fontFamily={fontFamily}>Summary</Styled.Title>

      <RequestCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

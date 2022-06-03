import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import UserHeader from "../../containers/UserHeader/UserHeader";
import * as Styled from "./style";
import {
  doc,
  updateDoc,
  collection,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../infstracture/firebase";
import { useActions, useAppState } from "../../../config";
import * as Location from "expo-location";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";

export default function HomeScreen() {
  const [location, setLocation] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<any>();

  const {
    winch: { online, driverOrigin },
    authentication: { user, currentUserRole },
  } = useAppState();

  const { setUserDestination, setStayAtHome } = useWinchActions();
  const { winch } = useActions();
  const navigation = useNavigation();
  const goOnline = () => {
    if (user?.uid) {
      const winchDriversRef = doc(db, "winchDrivers", user?.uid);
      updateDoc(winchDriversRef, {
        availability: true,
      });
      winch.goOnline();
    }
  };
  const goOffline = () => {
    if (user?.uid) {
      const winchDriversRef = doc(db, "winchDrivers", user?.uid);
      updateDoc(winchDriversRef, {
        availability: false,
      });
      winch.goOffline();
    }
  };

  useEffect(() => {
    //  enable location tracking for driver

    //  listen to any pending request for the current driver and accept it by default
    const listener = onSnapshot(
      doc(db, "PendingRequets", user?.uid),
      (snapshot) => {
        const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
        if (snapshot.exists()) {
          winch.setUserOrigin(snapshot.data().destination);
          winch.setDriverDestination({
            driverDestination: snapshot.data().destination,
          });
          setUserDestination({
            userDestination: snapshot.data().userDestination,
          });

          navigation.navigate("DriverMap", {
            userOrigin: snapshot.data().destination,
            driverOrigin: driverOrigin,
          });
          setStayAtHome({ stayAtHome: false });
          if (snapshot.data().userRejected === true) {
            const ref = doc(db, "PendingRequets", user?.uid);
            deleteDoc(ref);
          }
        } else {
          navigation.navigate("Home");
        }
      }
    );
    return () => {
      online && listener();
    };
  }, [online]);

  return (
    <>
      <UserHeader />
      <Text> please afetr finishing your tip press on go offilne </Text>
      <Styled.buttonContainer>
        {/* online */}
        {!online && (
          <Styled.Button
            onPress={() => {
              goOnline();
            }}
          >
            <Styled.ButtonText> Go Online </Styled.ButtonText>
          </Styled.Button>
        )}

        {online && (
          <Styled.Button
            onPress={() => {
              goOffline();
            }}
          >
            <Styled.ButtonText> Go offline </Styled.ButtonText>
          </Styled.Button>
        )}
      </Styled.buttonContainer>
    </>
  );
}

const styles = StyleSheet.create({});

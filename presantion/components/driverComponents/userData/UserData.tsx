import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { useTheme } from "../../../../application/custom-hooks/useTheme";
import { Button } from "@ui-kitten/components";
import { useWinchState } from "../../../../application/custom-hooks/useWinchState";
import { doc, deleteDoc } from "firebase/firestore";
import { useUserInfo } from "../../../../application/custom-hooks/useUserInfo";
import { db } from "../../../../infstracture/firebase";
import { useNavigation } from "@react-navigation/native";
import { useWinchActions } from "../../../../application/custom-hooks/useWinchActions";

export default function UserData() {
  const { fontFamily } = useTheme();
  const { driverDestination, userDestination } = useWinchState();
  const { rejectRequest } = useWinchActions();
  const [userLocation, setUserLocation] = useState<any>(null);
  const [googleApiKey, setGoogleApiKey] = useState(
    "AIzaSyBEI5mJ_Yga3K4lnZRIWzvk8JEm4WaFWrA"
  );
  const [userDestinationAddress, setUserDestination] = useState<any>(null);

  const navigation = useNavigation();
  const { user } = useUserInfo();

  const rejectUserRequest = async () => {
    if (user?.uid) {
      await deleteDoc(doc(db, "PendingRequets", user?.uid));
      navigation.navigate("Home");
      rejectRequest();
    }
  };

  const getUserAddress = async ({
    userDestination,
    setUserDestination,
  }: {
    userDestination: any;
    setUserDestination: any;
  }) => {
    await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        userDestination.latitude +
        "," +
        userDestination.longitude +
        "&key=" +
        googleApiKey
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setUserDestination(responseJson.results[0].formatted_address);
        console.log(responseJson.results[0].formatted_address);
        return responseJson.results.formatted_address;
      });
    //   @ts-ignore
  };

  const getAddress = async ({
    driverDestination,
    setUserLocation,
  }: {
    driverDestination: any;
    setUserLocation: any;
  }) => {
    await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        driverDestination.latitude +
        "," +
        driverDestination.longitude +
        "&key=" +
        googleApiKey
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setUserLocation(responseJson.results[0].formatted_address);
        console.log(responseJson.results[0].formatted_address);
        return responseJson.results.formatted_address;
      });
    //   @ts-ignore
  };

  useEffect(() => {
    getAddress({ driverDestination, setUserLocation });
    getUserAddress({ userDestination, setUserDestination });
  }, []);
  return (
    <Styled.Container>
      <Styled.UserLocationText fontFamily={fontFamily}>
        The user Location: {userLocation}
      </Styled.UserLocationText>
      <Styled.UserLocationText fontFamily={fontFamily}>
        The user destination:{userDestinationAddress}
      </Styled.UserLocationText>
      <Styled.ButtonsContainer>
        <Styled.ButtonContainer>
          <Button>Accept </Button>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer>
          <Button
            status="danger"
            onPress={() => {
              rejectUserRequest();
            }}
          >
            Reject{" "}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
}

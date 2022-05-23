import { View } from "react-native";
import React, { useEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useActions, useAppState } from "../../../config";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { Button } from "@ui-kitten/components";
import i18n from "../../../config/i18n/config";
import { useNavigation } from "@react-navigation/native";

export default function Location() {
  const {
    winch: { setDestination, setOrigin, fetchDrivers },
  } = useActions();
  const {
    winch: { origin, destination },
  } = useAppState();
  const navigation = useNavigation();
  const { fontFamily } = useTheme();

  useEffect(() => {
    if (origin && destination) {
      fetchDrivers({ lat: origin.lat, lng: origin.lng });
    }
  }, [origin, destination]);
  return (
    <View
      style={{
        paddingTop: 60,
      }}
    >
      <Styled.Title fontFamily={fontFamily}>
        {" "}
        {i18n.t("location.location")}{" "}
      </Styled.Title>
      <Styled.FormInputContainer>
        <Styled.FormLabel fontFamily={fontFamily}>
          {i18n.t("location.location")}
        </Styled.FormLabel>
        <GooglePlacesAutocomplete
          fetchDetails={true}
          query={{
            key: "AIzaSyCh07Xx1h5-SiFb9OrA_d8I5KApcdAAN_I",
            language: "en",
            components: "country:eg",
          }}
          minLength={2}
          styles={{
            container: {
              marginBottom: 30,
              flex: 0,
              marginLeft: 20,
              marginRight: 50,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(
            data: { description: any },
            details = null,
            options = null
          ) => {
            // @ts-ignore
            setOrigin({
              origin: {
                description: data.description,
                // @ts-ignore
                lat: details.geometry.location.lat,
                // @ts-ignore
                lng: details.geometry.location.lng,
              },
            });
          }}
          enablePoweredByContainer={false}
          placeholder="where from ? "
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
        />
        <Styled.FormLabel fontFamily={fontFamily}>
          {i18n.t("location.destination")}
        </Styled.FormLabel>
        <GooglePlacesAutocomplete
          fetchDetails={true}
          query={{
            key: "AIzaSyCh07Xx1h5-SiFb9OrA_d8I5KApcdAAN_I",
            language: "en",
            components: "country:eg",
          }}
          minLength={2}
          styles={{
            container: {
              marginLeft: 20,
              flex: 1,
              marginRight: 50,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(
            data: { description: any },
            details = null,
            options = null
          ) => {
            // @ts-ignore
            // @ts-ignore
            setDestination({
              destination: {
                description: data.description,
                // @ts-ignore
                lat: details.geometry.location.lat,
                // @ts-ignore
                lng: details.geometry.location.lng,
              },
            });
          }}
          enablePoweredByContainer={false}
          placeholder="where from ? "
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
        />
      </Styled.FormInputContainer>
      <Styled.ButtonContainer>
        <Button
          disabled={!origin || !destination}
          // @ts-ignore
          onPress={() => navigation.navigate("MapUser")}
        >
          {i18n.t("location.confirm")}
        </Button>
      </Styled.ButtonContainer>
    </View>
  );
}

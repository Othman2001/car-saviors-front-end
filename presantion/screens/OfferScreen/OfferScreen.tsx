import { SafeAreaView, StyleSheet } from "react-native";
import * as Styled from "./style";
import * as FormStyled from "../../components/loginForm/style";
import React, { useEffect } from "react";
import { useActions, useAppState } from "../../../config";
import TopHeader from "../../components/common/topHeader";
import { Input, Button } from "@ui-kitten/components";
import Spinner from "../../components/common/Spinner";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";

export default function OfferScreen() {
  const {
    theme: { fontFamily },
  } = useAppState();
  const { loading } = useRentalState();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [licenseNumber, setLicenseNumber] = React.useState("");
  const [firstImageUrl, setFirstImageUrl] = React.useState("");
  const [secondImageUrl, setSecondImageUrl] = React.useState("");
  const [thirdImageUrl, setThirdImageUrl] = React.useState("");

  const {
    authentication: { setRoleToCarOwner },
    rental: { registerAsCarOwner },
  } = useActions();

  const navigation = useNavigation();
  const {
    authentication: { user },
  } = useAppState();

  const handleSubmit = () => {
    registerAsCarOwner({
      phoneNumber: phoneNumber,
      carModel: model,
      carColor: color,
      carNumber: licenseNumber,
      images: [firstImageUrl, secondImageUrl, thirdImageUrl],
      // @ts-ignore
      userId: user?.uid,
    });
    setRoleToCarOwner();
    navigation.navigate("Welcome");
  };
  useEffect(() => {
    console.log(loading, "loading");
  });

  return (
    <SafeAreaView>
      <TopHeader />
      <ScrollView>
        <Styled.Container>
          <Styled.Title fontFamily={fontFamily}>
            Fill this form to offer your car for rent
          </Styled.Title>
          <FormStyled.FormLabel fontFamily={fontFamily}>
            phone number
          </FormStyled.FormLabel>
          <Input
            textStyle={{
              color: "#000",
            }}
            style={styles.input}
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
          />
          <FormStyled.FormLabel fontFamily={fontFamily}>
            car model
          </FormStyled.FormLabel>
          <Input
            textStyle={{
              color: "#000",
            }}
            onChangeText={(text) => {
              setModel(text);
            }}
            style={styles.input}
          />
          <FormStyled.FormLabel fontFamily={fontFamily}>
            car color
          </FormStyled.FormLabel>
          <Input
            textStyle={{
              color: "#000",
            }}
            onChangeText={(text) => {
              setColor(text);
            }}
            style={styles.input}
          />
          <FormStyled.FormLabel fontFamily={fontFamily}>
            car license number
          </FormStyled.FormLabel>
          <Input
            textStyle={{
              color: "#000",
            }}
            onChangeText={(text) => {
              setLicenseNumber(text);
            }}
            style={styles.input}
          />

          <FormStyled.FormLabel fontFamily={fontFamily}>
            car first imageURl
          </FormStyled.FormLabel>
          <Input
            textStyle={{
              color: "#000",
            }}
            onChangeText={(text) => {
              setFirstImageUrl(text);
            }}
            style={styles.input}
          />

          <FormStyled.FormLabel fontFamily={fontFamily}>
            car second image URl
          </FormStyled.FormLabel>
          <Input
            textStyle={{
              color: "#000",
            }}
            onChangeText={(text) => {
              setSecondImageUrl(text);
            }}
            style={styles.input}
          />
          <FormStyled.FormLabel fontFamily={fontFamily}>
            car third imageURl
          </FormStyled.FormLabel>
          <Input
            textStyle={{
              color: "#000",
            }}
            onChangeText={(text) => {
              setThirdImageUrl(text);
            }}
            style={styles.input}
          />

          <Button
            style={styles.button}
            onPress={() => {
              handleSubmit();
            }}
          >
            {" "}
            Submit{" "}
          </Button>
        </Styled.Container>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ffffff",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
    color: "black",
  },
  button: {
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
  },
  image: {
    width: 30,
    height: 30,
  },
});

import { Platform, SafeAreaView, StyleSheet } from "react-native";
import * as Styled from "./style";
import * as FormStyled from "../../components/loginForm/style";
import React, { useEffect } from "react";
import { useActions, useAppState } from "../../../config";
import * as ImagePicker from "expo-image-picker";
import TopHeader from "../../components/common/topHeader";
import { Input, Button } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";
import i18n from "../../../config/i18n/config";
import { Text } from "react-native-paper";
import getBlobFroUri from "../../../helpers/getBlob";
import mangeUpload from "../../../helpers/FileUpload";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Firebase from "../../../infstracture/firebase";
const blobToBase64 = require("blob-to-base64");

export default function OfferScreen() {
  const {
    theme: { fontFamily },
  } = useAppState();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const storage = getStorage(Firebase);
      const reference = ref(storage, "image.jpg");
      //  convert image to array of bytes
      const img = await fetch(result.uri);
      const bytes = await img.blob();
      await uploadBytes(reference, bytes);
    }
  };
  const { loading } = useRentalState();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [licenseNumber, setLicenseNumber] = React.useState("");
  const [image, setImage] = React.useState("");

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
      images: ["", "", ""],
      // @ts-ignore
      userId: user?.uid,
      imageUrl: image,
    });
    setRoleToCarOwner();
    // navigation.navigate("Welcome");
  };
  useEffect(() => {});

  return (
    <SafeAreaView>
      <TopHeader />
      <ScrollView>
        <Styled.Container>
          <Styled.Title fontFamily={fontFamily}>
            {i18n.t("offer.title")}
          </Styled.Title>
          <FormStyled.FormLabel fontFamily={fontFamily}>
            {i18n.t("offer.phoneNumber")}:
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
            {i18n.t("offer.carModel")}:
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
            {i18n.t("offer.carColor")}:
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
            {i18n.t("offer.carNumber")}:
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
          <Button onPress={pickImage}>
            <Text> Upload Car Image </Text>
          </Button>

          <Button
            style={styles.button}
            onPress={() => {
              handleSubmit();
            }}
          >
            {i18n.t("offer.submit")}
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

import { Platform, StyleSheet } from "react-native";
import * as Styled from "./style";
import * as FormStyled from "../../components/LoginForm/style";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Input, Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import i18n from "../../../config/i18n/config";
import { Text } from "react-native-paper";
import { IUserData } from "../../../application/authentication/state";
import { Formik } from "formik";
import OfferSchema from "./formValdtion";

interface IOfferFormProps {
  registerAsCarOwner: (payload: {
    phoneNumber: string;
    carModel: string;
    carColor: string;
    carNumber: string;
    images: any;
    userId: string;
    imageUrl: string;
    address: string;
    bodyType: string;
    modelYear: string;
    motorType: string;
    carBrand: string;
    pricePerDay: number;
  }) => Promise<void>;
  fontFamily: string;
  user: IUserData | null;
}

export default function OfferForm({
  registerAsCarOwner,
  fontFamily,
  user,
}: IOfferFormProps) {
  const [image, setImage] = React.useState(undefined);
  const navigation = useNavigation();

  const navigationToWelcome = () => {
    navigation.navigate("Welcome");
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      const img = await fetch(result.uri);
      const bytes: Blob | Uint8Array | ArrayBuffer = await img.blob();
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        // @ts-ignore
        reader.readAsDataURL(bytes);
        // @ts-ignore
        reader.onload = () => resolve(setImage(reader.result));
        reader.onerror = (error) => reject(error);
      });
      // upload base64 to firebase storage

      console.log(image, "iimamamsmsmsmsmsmsmm");
    }
  };
  useEffect(() => {
    async () => {
      if (Platform.OS === "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("you need to allow access to media library to upload image");
        }
      }
    };
  });

  return (
    <Styled.Container>
      <Styled.Title fontFamily={fontFamily}>
        {i18n.t("offer.title")}
      </Styled.Title>
      <Formik
        initialValues={{
          phoneNumber: "",
          model: "",
          color: "",
          licenseNumber: "",
          carBrand: "",
          carModelYear: "",
          carType: "",
          location: "",
          motorType: "",
          pricePerDay: 0,
        }}
        validationSchema={OfferSchema}
        onSubmit={(values) => {
          registerAsCarOwner({
            phoneNumber: values.phoneNumber,
            carModel: values.model,
            carColor: values.color,
            carNumber: values.licenseNumber,
            // @ts-ignore
            userId: user?.uid,
            // @ts-ignore
            imageUrl: image,
            address: values.location,
            bodyType: values.carType,
            modelYear: values.carModelYear,
            motorType: values.motorType,
            carBrand: values.carBrand,
            pricePerDay: values.pricePerDay,
            // @ts-ignore
          });
          navigationToWelcome();
        }}
      >
        {({ handleChange, handleSubmit, values, errors, isValid, dirty }) => (
          <>
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.phoneNumber")}:
            </FormStyled.FormLabel>
            {errors.phoneNumber ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.phoneNumber}
              </FormStyled.ErrorText>
            ) : null}

            <Input
              textStyle={{
                color: "#000",
              }}
              style={styles.input}
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.carModel")}:
            </FormStyled.FormLabel>
            {errors.model ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.model}
              </FormStyled.ErrorText>
            ) : null}

            <Input
              values={values.model}
              textStyle={{
                color: "#000",
              }}
              onChangeText={handleChange("model")}
              style={styles.input}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.carColor")}:
            </FormStyled.FormLabel>
            {errors.color ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.color}
              </FormStyled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              value={values.color}
              onChangeText={handleChange("color")}
              style={styles.input}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.carNumber")}:
            </FormStyled.FormLabel>
            {errors.licenseNumber ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.licenseNumber}
              </FormStyled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              value={values.licenseNumber}
              onChangeText={handleChange("licenseNumber")}
              style={styles.input}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.carBrand")}:
            </FormStyled.FormLabel>
            {errors.carBrand ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.carBrand}
              </FormStyled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              value={values.carBrand}
              onChangeText={handleChange("carBrand")}
              style={styles.input}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.carModelYear")}:
            </FormStyled.FormLabel>
            {errors.carModelYear ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.carModelYear}
              </FormStyled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              autoCapitalize="none"
              value={values.carModelYear}
              onChangeText={handleChange("carModelYear")}
              style={styles.input}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.carType")}:
            </FormStyled.FormLabel>
            {errors.carType ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.carType}
              </FormStyled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              autoCapitalize="none"
              value={values.carType}
              onChangeText={handleChange("carType")}
              style={styles.input}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.location")}:
            </FormStyled.FormLabel>
            {errors.location ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.location}
              </FormStyled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              autoCapitalize="none"
              value={values.location}
              onChangeText={handleChange("location")}
              style={styles.input}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.motorType")}:
            </FormStyled.FormLabel>
            {errors.motorType ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.motorType}
              </FormStyled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              autoCapitalize="none"
              value={values.motorType}
              onChangeText={handleChange("motorType")}
              style={styles.input}
            />
            <FormStyled.FormLabel fontFamily={fontFamily}>
              {i18n.t("offer.pricePerDay")}:
            </FormStyled.FormLabel>
            {errors.pricePerDay ? (
              <FormStyled.ErrorText fontFamily={fontFamily}>
                {errors.pricePerDay}
              </FormStyled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              autoCapitalize="none"
              value={values.pricePerDay}
              onChangeText={handleChange("pricePerDay")}
              style={styles.input}
            />
            <Styled.UploadButton>
              <Button onPress={pickImage}>
                <Text> {i18n.t("offer.uploadImage")} </Text>
              </Button>
            </Styled.UploadButton>

            <Button
              disabled={!(isValid && dirty && image)}
              style={styles.button}
              onPress={handleSubmit}
            >
              {i18n.t("offer.submit")}
            </Button>
          </>
        )}
      </Formik>
    </Styled.Container>
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
    marginTop: 0,
    marginLeft: 60,
    marginRight: 60,
  },
  image: {
    width: 30,
    height: 30,
  },
});
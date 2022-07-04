import * as Styled from "../../components/LoginForm/style";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import Spinner from "../common/Spinner";
import { Button, Input } from "@ui-kitten/components";
import i18n from "./../../../config/i18n/config";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { Formik } from "formik";
import registerSchema from "./registrSchema";

interface IRegisterForm {
  signUp: (payload: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    phoneNumber: string;
  }) => Promise<void>;
  loading: boolean;
  error: string;
}

export default function RegisterForm({
  signUp,
  loading,
  error,
}: IRegisterForm) {
  const { fontFamily, lng } = useTheme();

  const onSubmit = (values: any) => {
    signUp({
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      role: "user",
    });
  };
  return (
    <ScrollView
      style={{
        paddingTop: 120,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>

      <Formik
        validationSchema={registerSchema}
        onSubmit={(values) => {
          signUp({
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            role: "user",
            phoneNumber: values.phoneNumber,
          });
          console.log(values.phoneNumber, "phine");
        }}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            {error ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {i18n.t("register.error")}
              </Styled.ErrorText>
            ) : null}

            <Styled.FormLabel
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {i18n.t("register.firstName")}
            </Styled.FormLabel>
            {errors.firstName ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {errors.firstName}
              </Styled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              style={styles.input}
              value={values.firstName}
              onChangeText={handleChange("firstName")}
            />

            <Styled.FormLabel
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {i18n.t("register.lastName")}{" "}
            </Styled.FormLabel>
            {errors.lastName ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {errors.lastName}
              </Styled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              style={styles.input}
              value={values.lastName}
              onChangeText={handleChange("lastName")}
            />

            <Styled.FormLabel
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {i18n.t("register.Email")}{" "}
            </Styled.FormLabel>
            {errors.email ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {errors.email}
              </Styled.ErrorText>
            ) : null}

            <Input
              textStyle={{
                color: "#000",
              }}
              value={values.email}
              onChangeText={handleChange("email")}
              style={styles.input}
              autoCapitalize="none"
            />

            <Styled.FormLabel
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {i18n.t("register.phoneNumber")}
            </Styled.FormLabel>
            {errors.phoneNumber ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {errors.phoneNumber}
              </Styled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              style={styles.input}
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
            />

            <Styled.FormLabel
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {" "}
              {i18n.t("register.password")}{" "}
            </Styled.FormLabel>
            {errors.password ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {errors.password}
              </Styled.ErrorText>
            ) : null}
            <Input
              textStyle={{
                color: "#000",
              }}
              value={values.password}
              onChangeText={handleChange("password")}
              style={styles.input}
              secureTextEntry={true}
              autoCapitalize="none"
              placeholder="*******"
            />

            <Styled.FormLabel
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
            >
              {" "}
              {i18n.t("register.confirmPassword")}
            </Styled.FormLabel>
            {errors.confirmPassword ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {errors.confirmPassword}
              </Styled.ErrorText>
            ) : null}

            <Input
              textStyle={{
                color: "#000",
              }}
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              style={styles.input}
              secureTextEntry={true}
              autoCapitalize="none"
              placeholder="*******"
            />

            <Styled.CommonButton>
              <Button
                accessoryLeft={loading && <Spinner />}
                onPress={handleSubmit}
                style={{}}
                disabled={
                  !isValid ||
                  !values.confirmPassword ||
                  !values.email ||
                  !values.firstName ||
                  !values.lastName ||
                  !values.password
                }
              >
                {i18n.t("register.register")}
              </Button>
            </Styled.CommonButton>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ffffff",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
  },
});

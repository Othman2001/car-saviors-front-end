import { View } from "react-native";
import React from "react";
import * as Styled from "./style";
import { useNavigation } from "@react-navigation/native";
import { Button, Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import Spinner from "../common/Spinner";
import loginValidationSchema from "./loginScehma";
import { Formik } from "formik";
import i18n from "../../../config/i18n/config";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { useTheme } from "../../../application/custom-hooks/useTheme";

interface ILoginForm {
  logIn: (payload: { email: string; password: string }) => Promise<void>;
  loading: boolean;
  error: string;
}

export default function LoginForm({ logIn, loading, error }: ILoginForm) {
  const navigation = useNavigation();
  const { fontFamily, lng } = useTheme();
  const { loginLoading } = useUserInfo();

  return (
    <View>
      <Styled.Title fontFamily={fontFamily} spaceTop={220}>
        {" "}
        {i18n.t("login.welcome")}
      </Styled.Title>
      {error ? (
        <Styled.ErrorText
          isAr={lng === "ar" ? true : false}
          fontFamily={fontFamily}
        >
          {error}
        </Styled.ErrorText>
      ) : null}
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) =>
          logIn({ email: values.email, password: values.password })
        }
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
            <Styled.FormLabel
              fontFamily={fontFamily}
              vertical={10}
              horizontal={62}
              isAr={lng === "ar" ? true : false}
            >
              {i18n.t("login.email")}:
            </Styled.FormLabel>
            {errors.email ? (
              <Styled.ErrorText fontFamily={fontFamily}>
                {errors.email}
              </Styled.ErrorText>
            ) : null}
            <Input
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              autoCapitalize={false}
              textStyle={{
                color: "#000",
              }}
              style={styles.input}
              // onChangeText={(text) => setEmail(text)}
            />
            <Styled.FormLabel
              fontFamily={fontFamily}
              vertical={10}
              isAr={lng === "ar" ? true : false}
            >
              {i18n.t("login.password")}:
            </Styled.FormLabel>
            {errors.password ? (
              <Styled.ErrorText fontFamily={fontFamily}>
                {errors.password}
              </Styled.ErrorText>
            ) : null}
            <Input
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              textStyle={{
                color: "#000",
              }}
              placeholder="*******"
              secureTextEntry={true}
              style={styles.input}
              // value={password}
              // onChangeText={(text) => setPassword(text)}
            />
            <Styled.CommonButton>
              <Button
                accessoryLeft={loading && <Spinner />}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                {i18n.t("login.login")}
              </Button>
            </Styled.CommonButton>
            <Styled.SmallText
              isAr={lng === "ar" ? true : false}
              fontFamily={fontFamily}
              color="#000000;
"
            >
              {" "}
              {i18n.t("login.noAccount")}
              <Styled.Span
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
                onPress={() => {
                  navigation.navigate("Register");
                }}
                color="
#265A60"
              >
                {i18n.t("login.register")}
              </Styled.Span>{" "}
            </Styled.SmallText>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    color: "#ffffff",
  },
  input: {
    backgroundColor: "#ffffff",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
    color: "black",
  },
});

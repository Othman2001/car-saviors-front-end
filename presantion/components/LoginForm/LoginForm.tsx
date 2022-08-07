import { Image, View } from "react-native";
import React from "react";
import * as Styled from "./style";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import Spinner from "../common/Spinner";
import loginValidationSchema from "./loginScehma";
import { Formik } from "formik";
import i18n from "../../../config/i18n/config";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { TextInput } from "react-native-paper";

interface ILoginForm {
  logIn: (payload: { email: string; password: string }) => Promise<void>;
  loading: boolean;
  error: string;
}

export default function LoginForm({ logIn, loading, error }: ILoginForm) {
  const navigation = useNavigation();
  const { fontFamily, lng } = useTheme();

  return (
    <View
      style={{
        paddingTop: 250,
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
            {errors.email ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {errors.email}
              </Styled.ErrorText>
            ) : null}
            <TextInput
              autoCapitalize={"none"}
              activeOutlineColor="#265A60"
              mode="outlined"
              style={styles.input}
              label={i18n.t("login.email")}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}

              // onChangeText={(text) => setEmail(text)}
            />
            {errors.password ? (
              <Styled.ErrorText
                isAr={lng === "ar" ? true : false}
                fontFamily={fontFamily}
              >
                {errors.password}
              </Styled.ErrorText>
            ) : null}
            <TextInput
              autoCapitalize={"none"}
              activeOutlineColor="#265A60"
              label={i18n.t("login.password")}
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="*******"
              secureTextEntry={true}
              style={styles.input}
              mode={"outlined"}
              // value={password}
              // onChangeText={(text) => setPassword(text)}
            />
            <Styled.CommonButton>
              <Button
                accessoryLeft={loading && <Spinner />}
                onPress={handleSubmit}
                disabled={(!isValid && !values.email) || !values.password}
              >
                {i18n.t("login.login")}
              </Button>
            </Styled.CommonButton>
            <Styled.SmallText
              fontFamily={fontFamily}
              isAr={lng === "ar" ? true : false}
              color="#000000;
"
            >
              {" "}
              {i18n.t("login.noAccount")}
              <Styled.Span
                fontFamily={fontFamily}
                isAr={lng === "ar" ? true : false}
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
  },
});

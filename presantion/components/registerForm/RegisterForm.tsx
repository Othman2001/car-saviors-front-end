import * as Styled from "../loginForm/style";
import { ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import { useState } from "react";
import Spinner from "../common/Spinner";
import { Button, Input } from "@ui-kitten/components";
import { useAppState } from "../../../config";
import i18n from "./../../../config/i18n/config";
interface IRegisterForm {
  signUp: (payload: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
  }) => Promise<void>;
  loading: boolean;
}

export default function RegisterForm({ signUp, loading }: IRegisterForm) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    theme: { fontFamily },
  } = useAppState();

  return (
    <ScrollView>
      {/* create form using the form object schema */}

      <Styled.Title fontFamily={fontFamily} spaceTop={180}>
        {" "}
        Car Saviors{" "}
      </Styled.Title>
      <Styled.FormLabel fontFamily={fontFamily}>
        {" "}
        {i18n.t("register.firstName")}{" "}
      </Styled.FormLabel>
      <Input
        textStyle={{
          color: "#000",
        }}
        style={styles.input}
        value={firstName}
        // onChangeText={(text) => setFirstName(text)}
        onChangeText={(value) => setFirstName(value)}
      />

      <Styled.FormLabel fontFamily={fontFamily}>
        {i18n.t("register.lastName")}{" "}
      </Styled.FormLabel>
      <Input
        textStyle={{
          color: "#000",
        }}
        style={styles.input}
        value={lastName}
        onChangeText={(value) => setLastName(value)}
      />

      <Styled.FormLabel fontFamily={fontFamily}>
        {i18n.t("register.Email")}{" "}
      </Styled.FormLabel>
      <Input
        textStyle={{
          color: "#000",
        }}
        style={styles.input}
        autoCapitalize="none"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <Styled.FormLabel fontFamily={fontFamily}>
        {" "}
        {i18n.t("register.password")}{" "}
      </Styled.FormLabel>
      <Input
        textStyle={{
          color: "#000",
        }}
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        value={password}
        placeholder="*******"
        onChangeText={(value) => setPassword(value)}
      />

      <Styled.FormLabel fontFamily={fontFamily}>
        {" "}
        {i18n.t("register.confirmPassword")}
      </Styled.FormLabel>
      <Input
        textStyle={{
          color: "#000",
        }}
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        value={confirmPassword}
        placeholder="*******"
        onChangeText={(value) => setConfirmPassword(value)}
      />

      <Styled.CommonButton>
        <Button
          accessoryLeft={loading && <Spinner />}
          onPress={() => {
            signUp({
              email,
              password,
              firstName,
              lastName,
              role: "user",
            });
          }}
        >
          Sign Up
        </Button>
      </Styled.CommonButton>
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

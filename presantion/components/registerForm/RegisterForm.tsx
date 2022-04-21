import * as Styled from "../loginForm/style";
import { ScrollView, Text } from "react-native";
import React from "react";
import { useState } from "react";

interface IRegisterForm {
  signUp: (payload: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
  }) => Promise<void>;
}

export default function RegisterForm({ signUp }: IRegisterForm) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView>
      {/* create form using the form object schema */}

      <Styled.Title spaceTop={180}> Car Saviors </Styled.Title>
      <Styled.FormLabel> First Name </Styled.FormLabel>
      <Styled.FormInput
        value={firstName}
        // onChangeText={(text) => setFirstName(text)}
        onChangeText={(value) => setFirstName(value)}
      />

      <Styled.FormLabel>Last Name </Styled.FormLabel>
      <Styled.FormInput
        value={lastName}
        onChangeText={(value) => setLastName(value)}
      />

      <Styled.FormLabel>Email </Styled.FormLabel>
      <Styled.FormInput
        autoCapitalize="none"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <Styled.FormLabel> Password </Styled.FormLabel>
      <Styled.FormInput
        secureTextEntry={true}
        autoCapitalize="none"
        value={password}
        placeholder="*******"
        onChangeText={(value) => setPassword(value)}
      />

      <Styled.FormLabel> Confirm Password</Styled.FormLabel>
      <Styled.FormInput
        secureTextEntry={true}
        autoCapitalize="none"
        value={confirmPassword}
        placeholder="*******"
        onChangeText={(value) => setConfirmPassword(value)}
      />

      <Styled.CommonButton>
        <Styled.ButtonText
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
        </Styled.ButtonText>
      </Styled.CommonButton>
    </ScrollView>
  );
}

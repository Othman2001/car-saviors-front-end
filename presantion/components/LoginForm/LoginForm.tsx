import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";
import * as Styled from "./style";
import { useAppState } from "../../../config";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

interface ILoginForm {
  logIn: (payload: { email: string; password: string }) => Promise<void>;
}

export default function LoginForm({ logIn }: ILoginForm) {
  const [email, setEmail] = React.useState("h");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();
  const {
    authentication: { user },
  } = useAppState();

  useEffect(() => {
    if (user) {
      alert("user is logged in");
    }
  }, [user]);
  return (
    <View>
      <Styled.Title spaceTop={220}> Welcome to Car Saviors </Styled.Title>
      <Styled.FormLabel vertical={10} horizontal={62}>
        Email:
      </Styled.FormLabel>
      <Styled.FormInput onChangeText={(text) => setEmail(text)} />
      <Styled.FormLabel vertical={10}>Password:</Styled.FormLabel>
      <Styled.FormInput
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Styled.CommonButton>
        <Styled.ButtonText
          onPress={() => {
            logIn({ email, password });
          }}
        >
          {" "}
          Log In{" "}
        </Styled.ButtonText>
      </Styled.CommonButton>
      <Styled.SmallText color="#265A60"> forgotten password? </Styled.SmallText>
      <Styled.SmallText
        color="#000000;
"
      >
        {" "}
        Don't have an account{" "}
        <Styled.Span
          onPress={() => {
            navigation.navigate("Register");
          }}
          color="
#265A60"
        >
          {" "}
          Sign Up?
        </Styled.Span>{" "}
      </Styled.SmallText>
    </View>
  );
}

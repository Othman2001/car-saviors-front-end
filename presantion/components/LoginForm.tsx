import { View, Text } from "react-native";
import React from "react";
import * as Styled from "./LoginForm/style";
import { useAppState } from "../../config";
import { useEffect } from "react";

interface ILoginForm {
  logIn: (payload: { email: string; password: string }) => Promise<void>;
}

export default function LoginForm({ logIn }: ILoginForm) {
  const [email, setEmail] = React.useState("h");
  const [password, setPassword] = React.useState("");

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
      <View>
        <Styled.Title> Welcome to Car Saviors </Styled.Title>
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
        <Styled.SmallText color="#265A60">
          {" "}
          forgotten password?{" "}
        </Styled.SmallText>
        <Styled.SmallText
          color="#000000;
"
        >
          {" "}
          Don't have an account{" "}
          <Styled.Span
            color="
#265A60"
          >
            {" "}
            Sign Up?
          </Styled.Span>{" "}
        </Styled.SmallText>
      </View>
      <Text
        style={{
          color: "black",
        }}
      >
        {" "}
        email: {email}{" "}
      </Text>
      <Text>{password} </Text>
    </View>
  );
}

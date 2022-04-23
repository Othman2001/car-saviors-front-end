import { View, Text } from "react-native";
import React from "react";
import LoginFormComponent from "../../components/loginForm/LoginForm";
import { useActions, useAppState } from "../../../config";

export default function LoginForm() {
  const {
    authentication: { logIn },
  } = useActions();

  const {
    authentication: { loading },
  } = useAppState();
  return (
    <View>
      <LoginFormComponent logIn={logIn} loading={loading} />
    </View>
  );
}

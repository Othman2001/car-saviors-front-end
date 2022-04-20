import { View, Text } from "react-native";
import React from "react";
import LoginFormComponent from "../../components/LoginForm";
import { useActions } from "../../../config";

export default function LoginForm() {
  const {
    authentication: { logIn },
  } = useActions();
  return (
    <View>
      <LoginFormComponent logIn={logIn} />
    </View>
  );
}

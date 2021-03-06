import { View, Text } from "react-native";
import React from "react";
import LoginFormComponent from "../../components/LoginForm/LoginForm";
import { useUserActions } from "../../../application/custom-hooks/useUserActions";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";

export default function LoginForm() {
  const { logIn } = useUserActions();
  const { loading, loginLoading, logInError } = useUserInfo();

  return (
    <View>
      <LoginFormComponent
        error={logInError}
        logIn={logIn}
        loading={loginLoading}
      />
    </View>
  );
}

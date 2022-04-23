import { StyleSheet } from "react-native";
import RegisterFormComponent from "../../components/registerForm/RegisterForm";
// @ts-ignore
import React from "react";
import { useActions, useAppState } from "../../../config";

export default function RegisterForm() {
  const {
    authentication: { signUp },
  } = useActions();
  const {
    authentication: { loading },
  } = useAppState();

  return <RegisterFormComponent loading={loading} signUp={signUp} />;
}

const styles = StyleSheet.create({});

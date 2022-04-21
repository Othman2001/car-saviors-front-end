import { StyleSheet } from "react-native";
import RegisterFormComponent from "../../components/registerForm/RegisterForm";
// @ts-ignore
import React from "react";
import { useActions } from "../../../config";

export default function RegisterForm() {
  const {
    authentication: { signUp },
  } = useActions();
  return <RegisterFormComponent signUp={signUp} />;
}

const styles = StyleSheet.create({});

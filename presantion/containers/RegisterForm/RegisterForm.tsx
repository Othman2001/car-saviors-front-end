import RegisterFormComponent from "../../components/registerForm/RegisterForm";
import React from "react";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { useUserActions } from "../../../application/custom-hooks/useUserActions";

export default function RegisterForm() {
  const { loading } = useUserInfo();
  const { signUp } = useUserActions();
  const { signUpError } = useUserInfo();

  return (
    <RegisterFormComponent
      loading={loading}
      signUp={signUp}
      error={signUpError}
    />
  );
}

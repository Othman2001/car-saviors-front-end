import { useAppState } from "../../config";

// function declration

export const useUserInfo = () => {
  const {
    authentication: {
      user,
      currentUserRole,
      loading,
      error,
      signUpError,
      logInError,
      loginLoading,
    },
  } = useAppState();

  return {
    user,
    currentUserRole,
    loading,
    error,
    logInError,
    signUpError,
    loginLoading,
  };
};

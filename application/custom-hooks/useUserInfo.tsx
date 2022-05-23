import { useAppState } from "../../config";

export const useUserInfo = () => {
  const {
    authentication: {
      user,
      visitedWorkShops,
      currentUserRole,
      rentedCar,
      rentingCar,
      loading,
      error,
      signUpError,
      logInError,
      loginLoading,
    },
  } = useAppState();
  return {
    user,
    visitedWorkShops,
    currentUserRole,
    rentedCar,
    rentingCar,
    loading,
    error,
    logInError,
    signUpError,
    loginLoading,
  };
};

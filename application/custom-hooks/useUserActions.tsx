import { useActions } from "../../config";

export const useUserActions = () => {
  const {
    authentication: { logIn, setError, setRoleToCarOwner, signUp },
  } = useActions();
  return {
    logIn,
    setError,
    setRoleToCarOwner,
    signUp,
  };
};

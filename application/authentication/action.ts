import { AsyncAction } from "../../config";

export const signUp: AsyncAction<{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}> = async (
  { state: { authentication }, effects },
  { email, password, firstName, lastName, role }
) => {
  authentication.loading = true;
  authentication.error = "";
  //   @ts-ignore

  const userData = await effects.authentication.createUser(
    email,
    password,
    firstName,
    lastName,
    role
  );
  authentication.user = userData.user;
  authentication.currentUserRole = userData.role;
};

export const logIn: AsyncAction<{ email: string; password: string }> = async (
  { state, effects, actions },
  { email, password }
) => {
  state.authentication.loading = true;
  state.authentication.error = "";
  state.authentication.user = await effects.authentication.userSignIn(
    email,
    password,
    setError
  );
  state.authentication.currentUserRole =
    await effects.authentication.authroizeUser(email);
};

export const setError: AsyncAction<string> = async (
  { state, effects },
  error
) => {
  state.authentication.error = error;
};

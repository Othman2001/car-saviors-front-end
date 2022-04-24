import { Action, AsyncAction } from "../../config";

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

  await effects.authentication
    .createUser(email, password, firstName, lastName, role)
    .then((res) => {
      console.log(res);
      authentication.user = res.data.user;
      authentication.currentUserRole = res.data.role;
      authentication.rentedCar = res.data.rentedCar;
      authentication.rentingCar = res.data.rentingCar;
      authentication.visitedWorkShops = res.data.visitedWorkShops;
    })
    .catch((error) => {
      authentication.error = error.message;
    });
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

  await effects.authentication.authroizeUser(email).then((res) => {
    state.authentication.currentUserRole = res.data.role;
    state.authentication.rentedCar = res.data.rentedCar;
    state.authentication.rentingCar = res.data.rentingCar;
    state.authentication.visitedWorkShops = res.data.visitedWorkShops;
  });
};

export const setError: AsyncAction<string> = async (
  { state, effects },
  error
) => {
  state.authentication.error = error;
};

export const setRoleToCarOwner: Action = ({ state }) => {
  state.authentication.currentUserRole = "car-owner";
};

import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
      authentication.user = res.data.user;
      authentication.currentUserRole = res.data.role;
      if (
        res.data.rentedCar &&
        res.data.rentingCar &&
        res.data.visitedWorkShops
      ) {
        authentication.rentedCar = res.data.rentedCar;
        authentication.rentingCar = res.data.rentingCar;
        authentication.visitedWorkShops = res.data.visitedWorkShops;
        authentication.currentUserRole = "user";
      } else {
        authentication.rentedCar = 0;
        authentication.rentingCar = 0;
        authentication.visitedWorkShops = 0;
        authentication.currentUserRole = "user";
      }
    })
    .catch((error) => {
      authentication.signUpError = error.message;
      setTimeout(() => {
        authentication.signUpError = "";
      }, 3000);
    });
  authentication.loading = false;
};

export const logIn: AsyncAction<{ email: string; password: string }> = async (
  { state, effects, actions },
  { email, password }
) => {
  state.authentication.loading = true;
  state.authentication.error = "";
  const app = getApp();
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      state.authentication.user = userCredential.user;
      return userCredential.user;
    })
    .catch((error) => {
      state.authentication.loading = false;
      state.authentication.logInError = error.code;
    });

  state.authentication.loading = false;

  await effects.authentication.authroizeUser(email).then((res) => {
    state.authentication.currentUserRole = res.data.role;
    state.authentication.rentedCar = res.data.rentedCar;
    state.authentication.rentingCar = res.data.rentingCar;
    state.authentication.visitedWorkShops = res.data.visitedWorkShops;
  });
  state.authentication.loading = false;
};

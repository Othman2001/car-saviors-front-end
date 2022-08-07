import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AsyncAction } from "../../config";

export const signUp: AsyncAction<{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: string;
}> = async (
  { state: { authentication }, effects },
  { email, password, firstName, lastName, role, phoneNumber }
) => {
  authentication.loading = true;
  authentication.error = "";
  //   @ts-ignore

  await effects.authentication
    .createUser(email, password, firstName, lastName, role, phoneNumber)
    .then((res) => {
      authentication.user = res.data.user;
      authentication.currentUserRole = res.data.role;
      authentication.currentUserRole = "user";
      authentication.phoneNumber =
        (res.data.phoneNumber && res.data.phoneNumber) || null;
    })
    .catch((error) => {
      authentication.signUpError = error;
    });
  authentication.loading = false;
};

export const logIn: AsyncAction<{ email: string; password: string }> = async (
  { state, effects },
  { email, password }
) => {
  state.authentication.error = "";
  state.authentication.loginLoading = true;
  const app = getApp();
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      state.authentication.user = userCredential.user;
      return userCredential.user;
    })
    .catch((error) => {
      state.authentication.logInError = error.message;
    });

  state.authentication.loginLoading = false;
  await effects.authentication.authroizeUser(email).then((res) => {
    state.authentication.currentUserRole = res.data.role;
    state.winch.driverOrigin = res.data.geopoint;
    if (res.data.role === "driver") {
      state.winch.userType = "driver";
    } else {
      state.winch.userType = "user";
      state.authentication.phoneNumber =
        (res.data.phoneNumber && res.data.phoneNumber) || null;
    }
  });
  state.authentication.loading = false;
};

export const SignOut: AsyncAction = async ({ state, effects }) => {
  await effects.authentication.userSignOut();
  state.authentication.user = null;
  state.authentication.currentUserRole = "";
  state.winch.driverOrigin = null;
  state.winch.userType = "";
  state.winch.driverOrigin = null;
  state.winch.userOrigin = null;
  state.winch.userDestination = null;
};

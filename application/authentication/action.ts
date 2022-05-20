import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
  state.authentication.error = "";
  const app = getApp();
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      state.authentication.user = userCredential.user;
      return userCredential.user;
    })
    .catch((error) => {});

  await effects.authentication.authroizeUser(email).then((res) => {
    state.authentication.currentUserRole = res.data.role;
    state.authentication.rentedCar = res.data.rentedCar;
    state.authentication.rentingCar = res.data.rentingCar;
    state.authentication.visitedWorkShops = res.data.visitedWorkShops;
    state.winch.driverOrigin = res.data.geopoint;
    if (res.data.role === "driver") {
      state.winch.userType = "driver";
    } else {
      state.winch.userType = "user";
    }
  });

  state.authentication.loading = false;
};

export const SignOut: AsyncAction = async ({ state, effects }) => {
  await effects.authentication.userSignOut();
  state.authentication.user = null;
  state.authentication.currentUserRole = "";
  state.authentication.rentedCar = 0;
  state.authentication.rentingCar = 0;
  state.authentication.visitedWorkShops = 0;
  state.winch.driverOrigin = null;
  state.winch.userType = "";
};

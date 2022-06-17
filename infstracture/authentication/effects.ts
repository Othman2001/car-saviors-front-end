import { getApp } from "firebase/app";
import axios from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
// @ts-ignore
import Firebase from "../firebase";
import { Alert } from "react-native";

export const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: string
) => {
  const user = await axios.post(
    "https://us-central1-car-saviors.cloudfunctions.net/createUser",
    {
      email,
      password,
      firstName,
      lastName,
    }
  );
  return user;
};
export const userSignIn = async (
  email: string,
  password: string,
  setError: (params: any) => void
) => {
  // @ts-ignore
  if (Firebase) {
    const app = getApp();
    const auth = getAuth(app);

    return signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  }
};

export const authroizeUser = async (email: string) => {
  const userRole = await axios.post(
    "https://us-central1-car-saviors.cloudfunctions.net/authorize",
    {
      email,
    }
  );
  return userRole;
};

export const userSignOut = async () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};

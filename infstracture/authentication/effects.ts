import { getApp } from "firebase/app";
import axios from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
// @ts-ignore
import Firebase from "../firebase";

export const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: string,
  phoneNumber: string
) => {
  const user = await axios.post(
    "http://localhost:5001/car-saviors/us-central1/createUser",
    {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
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
    "http://localhost:5001/car-saviors/us-central1/authorize",
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

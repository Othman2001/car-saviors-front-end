import { getApp } from "firebase/app";
import axios from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Firebase from "../firebase";

export const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: string
) => {
  const user = await axios.post(
    "http://localhost:5001/car-saviors/us-central1/createUser",
    {
      email,
      password,
      firstName,
      lastName,
    }
  );
  return user.data;
};
export const userSignIn = async (email: string, password: string) => {
  if (Firebase) {
    const app = getApp();
    const auth = getAuth(app);

    return signInWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        return userCredential.user;
      }
    );
  }
};

export const authroizeUser = async (email: string) => {
  const userRole = await axios.post(
    "http://localhost:5001/car-saviors/us-central1/authorize",
    {
      email,
    }
  );
  userRole.data;
};

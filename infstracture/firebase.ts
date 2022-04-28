import * as firebase from "firebase/app";
import { getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { connectFirestoreEmulator } from "firebase/firestore";


import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "",

const firebaseConfig = {
  apiKey: "",

  authDomain: "car-saviors.firebaseapp.com",
  projectId: "car-saviors",
  storageBucket: "car-saviors.appspot.com",
  messagingSenderId: "943720805591",
  appId: "1:943720805591:web:8c1c7bde0d827520beac92",
  measurementId: "G-XBHM1FK1L2",
};

let Firebase;

if (firebase.getApps().length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  const functions = getFunctions(getApp());
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export let db = getFirestore();
connectFirestoreEmulator(db, "localhost", 3000);
export const storage = getStorage(Firebase);

export default Firebase;

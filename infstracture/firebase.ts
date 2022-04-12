import { initializeApp } from "firebase/app";
import { getApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB42ab0qD3LOTsL5aIrj_jA6XiH5JC32vc",
  authDomain: "car-saviors.firebaseapp.com",
  projectId: "car-saviors",
  storageBucket: "car-saviors.appspot.com",
  messagingSenderId: "943720805591",
  appId: "1:943720805591:web:8c1c7bde0d827520beac92",
  measurementId: "G-XBHM1FK1L2",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

initializeApp(firebaseConfig);

// firebaseApps previously initialized using initializeApp()

export const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 5001);

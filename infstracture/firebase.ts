import * as firebase from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyB42ab0qD3LOTsL5aIrj_jA6XiH5JC32vc",
  authDomain: "car-saviors.firebaseapp.com",
  projectId: "car-saviors",
  storageBucket: "car-saviors.appspot.com",
  messagingSenderId: "943720805591",
  appId: "1:943720805591:web:8c1c7bde0d827520beac92",
  measurementId: "G-XBHM1FK1L2",
};

let Firebase, db, storage;

if (firebase.getApps().length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
  db = getFirestore(Firebase);
  storage = getStorage(Firebase);
}
export { db };

export default Firebase;

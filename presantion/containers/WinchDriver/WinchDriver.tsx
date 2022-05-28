import React, { useEffect } from "react";
import WinchDriverComponent from "../../components/winchDriver/WinchDriver";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import {
  getFirestore,
  doc,
  collection,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";

export default function WinchDriver() {
  const { winchDrivers, travelTimeInformation, price } = useWinchState();
  const { setWinchDriverId, clearFields, setRejection } = useWinchActions();
  const navigation = useNavigation();

  useEffect(() => {
    const db = getFirestore();
    const PendingRequets = doc(db, "PendingRequets", winchDrivers[0].id);
    const listener = onSnapshot(PendingRequets, (doc) => {
      if (doc.exists()) {
        if (doc.data().userRejected) {
          console.log("rejected successfully");
          setRejection({ isRejected: true });
          navigation.dispatch(StackActions.replace("Location"));
        }
      }
    });
    return () => {
      listener();
    };
  }, []);
  return (
    <WinchDriverComponent
      winchDrivers={winchDrivers}
      travelTimeInformation={travelTimeInformation}
      price={price}
      setWinchDriverId={setWinchDriverId}
    />
  );
}

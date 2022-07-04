import { doc, updateDoc } from "firebase/firestore";
// @ts-ignore
import { db } from "../../../infstracture/firebase";

export const setDriverOffline = ({ driverId }: { driverId: string }) => {
  // @ts-ignore
  const driverRef = doc(db, `winchDrivers/${driverId}`);
  updateDoc(driverRef, {
    availability: false,
  });
};

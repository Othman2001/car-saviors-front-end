import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { updateAvailability } from "../presantion/components/winchDriver/updateAvailability";

export const updateData = ({
  docId,
  collectionName,
  driverId,
}: {
  docId: string;
  collectionName: string;
  driverId: string;
}) => {
  const db = getFirestore();
  const docRef = doc(db, collectionName, docId);
  const driverRef = doc(db, `winchDrivers/${driverId}`);
  updateDoc(docRef, {
    userRejected: true,
  });
  setTimeout(() => {
    updateDoc(driverRef, {
      availability: true,
    });
  }, 2000);
};

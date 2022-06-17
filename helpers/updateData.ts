import { getFirestore, doc, updateDoc } from "firebase/firestore";

export const updateData = ({
  docId,
  collectionName,
  filedName,
  newValue,
}: {
  docId: string;
  collectionName: string;
  filedName: string;
  newValue: string | boolean | number;
}) => {
  const db = getFirestore();
  const docRef = doc(db, collectionName, docId);
  updateDoc(docRef, {
    userRejected: true,
  });
};

import { deleteDoc, doc } from "firebase/firestore";
// @ts-ignore
import { db } from "../../../infstracture/firebase";

export const cancelTrip = ({ requestId }: { requestId: string }) => {
  // @ts-ignore
  const requestRef = doc(db, "PendingRequets", requestId);
  // delete document
  deleteDoc(requestRef);
};

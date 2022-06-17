import { setDoc, doc, deleteDoc } from "@firebase/firestore";
import { RequestSchema } from "../../application/winch/types";
import { db } from "../../infstracture/firebase";

const setData = async ({
  firstName,
  lastName,
  winchDriverId,
  userName,
  userId,
  userDestination,
  destination,
  isAcccepted,
}: RequestSchema) => {
  await setDoc(doc(db, "PendingRequets", winchDriverId), {
    firstName,
    lastName,
    winchDriverId,
    userName,
    userId,
    userDestination,
    destination,
    isAcccepted,
  });
};

const deleteData = async (winchDriverId: string) => {
  await deleteDoc(doc(db, "PendingRequets", winchDriverId));
};

export { setData, deleteData };

import axios from "axios";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";

export const fetchDrivers = async ({ lat, lng }: { lat: any; lng: any }) => {
  const drivers = axios.post(
    "https://us-central1-car-saviors.cloudfunctions.net/fetchDrivers",
    { lat, lng }
  );

  return (await drivers).data.drivers;
};

export const getTravelDistanceInformation = async ({
  origin,
  destination,
}: {
  origin: any;
  destination: any;
}) => {
  const data = fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.lat},${origin.lng}&destinations=${destination.lat},${destination.lng}&key=AIzaSyCh07Xx1h5-SiFb9OrA_d8I5KApcdAAN_I`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.rows[0].elements[0];
    })
    .catch((err) => {});
  return data;
};

export const rejectUserRequest = ({ requestId }: { requestId: string }) => {
  const db = getFirestore();
  const requestRef = doc(db, "PendingRequets", requestId);
  deleteDoc(requestRef);
};

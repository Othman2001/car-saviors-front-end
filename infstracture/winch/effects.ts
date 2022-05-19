import axios from "axios";

export const fetchDrivers = async ({ lat, lng }: { lat: any; lng: any }) => {
  const drivers = axios.post(
    "http://localhost:5001/car-saviors/us-central1/fetchDrivers",
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
    `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description},${destination.location.lng}&key=AIzaSyCh07Xx1h5-SiFb9OrA_d8I5KApcdAAN_I`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.rows[0].elements[0];
    })
    .catch((err) => {});
  return data;
};

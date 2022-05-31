import axios from "axios";

export const fetchBrands = async () => {
  const brands = axios
    .get("https://us-central1-car-saviors.cloudfunctions.net/fetchBrands")
    .then((res) => {
      return res.data.brands;
    });
  return brands;
};

export const fetchWorkshops = async ({ brandName }: { brandName: string }) => {
  const workshops = axios
    .post("https://us-central1-car-saviors.cloudfunctions.net/fetchWorkshops", {
      brandName,
    })
    .then((res) => {
      return res.data.WorkShopdata;
    });
  return workshops;
};

export const bookDate = async ({
  workshopId,
  workshopName,
  userId,
  userName,
  pickedDate,
}: {
  workshopId: string;
  workshopName: string;
  userId: string;
  userName: string;
  pickedDate: string | Date;
}) => {
  const visitId = axios.post(
    "https://us-central1-car-saviors.cloudfunctions.net/bookDate",
    {
      workshopId,
      workshopName,
      userId,
      userName,
      pickedDate,
    }
  );
  return (await visitId).data.visitId;
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

import axios from "axios";

export const fetchBrands = async () => {
  const brands = axios
    .get("http://localhost:5001/car-saviors/us-central1/fetchBrands")
    .then((res) => {
      return res.data.brands;
    });
  return brands;
};

export const fetchWorkshops = async ({ brandName }: { brandName: string }) => {
  const workshops = axios
    .post("http://localhost:5001/car-saviors/us-central1/fetchWorkshops", {
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
    "http://localhost:5001/car-saviors/us-central1/bookDate",
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

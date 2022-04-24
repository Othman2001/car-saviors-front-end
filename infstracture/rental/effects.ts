import axios from "axios";
export const rentCar = async ({
  total,
  dates,
  daysCount,
  userId,
  carOwnerId,
  carId,
  endDate,
  startDate,
}: {
  total: number;
  dates: string[];
  daysCount: number;
  userId: string;
  carOwnerId: string;
  carId: string;
  endDate: string;
  startDate: string;
}) => {
  const res = axios.post(
    "https://us-central1-car-saviors.cloudfunctions.net/rentCar",
    {
      total,
      dates,
      userId,
      daysCount,
      carOwnerId,
      carId,
      startDate,
      endDate,
    }
  );
  return res;
};

export const fetchCars = async () => {
  const cars = await axios
    .get("https://us-central1-car-saviors.cloudfunctions.net/fetchCars")
    .then((res) => {
      return res.data.cars;
    });
  return cars;
};

export const registerAsCarOwner = async ({
  phoneNumber,
  carModel,
  carColor,
  carNumber,
  images,
  userId,
}: {
  phoneNumber: string;
  carModel: string;
  carColor: string;
  carNumber: string;
  images: string[];
  userId: string;
}) => {
  axios.post(
    "https://us-central1-car-saviors.cloudfunctions.net/registerAsCarOwner",
    {
      phoneNumber,
      carModel,
      carColor,
      carNumber,
      images,
      userId,
    }
  );
};

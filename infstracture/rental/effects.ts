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
    "http://localhost:5001/car-saviors/us-central1/rentCar",
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
  userId,
  imageUrl,
  address,
  bodyType,
  modelYear,
  motorType,
  carBrand,
  pricePerDay,
}: {
  phoneNumber: string;
  carModel: string;
  carColor: string;
  carNumber: string;
  userId: string;
  imageUrl: string;
  address: string;
  bodyType: string;
  modelYear: string;
  motorType: string;
  carBrand: string;
  pricePerDay: number;
}) => {
  axios.post(
    "http://localhost:5001/car-saviors/us-central1/registerAsCarOwner",
    {
      phoneNumber,
      carModel,
      carColor,
      carNumber,
      userId,
      images: [imageUrl],
      imageUrl,
      address,
      bodyType,
      modelYear,
      motorType,
      carBrand,
      pricePerDay,
    }
  );
};

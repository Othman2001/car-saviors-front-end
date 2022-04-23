import axios from "axios";
export const rentCar = async ({
  total,
  startDate,
  endDate,
  daysCount,
  userId,
  carOwnerId,
  carId,
}: {
  total: number;
  startDate: string;
  endDate: string;
  daysCount: number;
  userId: string;
  carOwnerId: string;
  carId: string;
}) => {
  const message = await axios.post(
    "http://localhost:5001/car-saviors/us-central1/rentCar",
    {
      total,
      startDate,
      endDate,
      userId,
      daysCount,
      carOwnerId,
      carId,
    }
  );
  return message.data;
};

export const fetchCars = async () => {
  const cars = await axios
    .get("https://us-central1-car-saviors.cloudfunctions.net/fetchCars")
    .then((res) => {
      return res.data.cars;
    });
  return cars;
};

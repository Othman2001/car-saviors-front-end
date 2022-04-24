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
  const message = await axios.post(
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

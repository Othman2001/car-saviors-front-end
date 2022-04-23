import axios from "axios";
export const rentCar = async ({
  total,
  startDate,
  endDate,
  daysCount,
}: {
  total: number;
  startDate: string;
  endDate: string;
  daysCount: number;
}) => {
  axios.post("http://localhost:5001/car-saviors/us-central1/fetchCars", {
    total,
    startDate,
    endDate,
    daysCount,
  });
};

import axios from "axios";
export const rentCar = async ({
  total,
  startDate,
  endDate,
  daysCount,
  phoneNumber,
}: {
  total: number;
  startDate: string;
  endDate: string;
  daysCount: number;
  phoneNumber: string;
}) => {
  axios.post("http://localhost:5001/car-saviors/us-central1/rentCar", {
    total,
    startDate,
    endDate,
    daysCount,
    phoneNumber,
  });
};

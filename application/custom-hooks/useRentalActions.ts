import { useActions } from "../../config";

export const useRentalActions = () => {
  const {
    rental: { fetchCars, registerAsCarOwner, setDates, setTotal, rentCar },
  } = useActions();
  return { fetchCars, registerAsCarOwner, setDates, setTotal, rentCar };
};

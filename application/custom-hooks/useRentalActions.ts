import { useActions } from "../../config";

export const useRentalActions = () => {
  const {
    rental: { fetchCars },
  } = useActions();
  return { fetchCars };
};

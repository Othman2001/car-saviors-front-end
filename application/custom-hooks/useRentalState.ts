import { useAppState } from "../../config";

export const useRentalState = () => {
  const {
    rental: { cars, loading },
  } = useAppState();
  return { cars, loading };
};

import { useActions } from "../../config";

export const useRentalActions = () => {
  const {
    rental: {
      fetchCars,
      registerAsCarOwner,
      setDates,
      setTotal,
      rentCar,
      setRentalRequest,
    },
  } = useActions();
  return {
    fetchCars,
    registerAsCarOwner,
    setDates,
    setTotal,
    rentCar,
    setRentalRequest,
  };
};

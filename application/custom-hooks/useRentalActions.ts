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
      resetState,
    },
  } = useActions();
  return {
    fetchCars,
    registerAsCarOwner,
    setDates,
    setTotal,
    rentCar,
    setRentalRequest,
    resetState,
  };
};

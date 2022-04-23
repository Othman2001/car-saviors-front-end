import { useAppState } from "../../config";

export const useRentalState = () => {
  const {
    rental: {
      cars,
      loading,
      message,
      totalPrice,
      startDate,
      endDate,
      daysCount,
      rentalPrice,
    },
  } = useAppState();
  return {
    cars,
    loading,
    message,
    totalPrice,
    startDate,
    endDate,
    daysCount,
    rentalPrice,
  };
};

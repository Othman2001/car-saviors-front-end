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
      error,
      requests,
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
    error,
    requests,
  };
};

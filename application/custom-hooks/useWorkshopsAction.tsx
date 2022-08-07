import { useActions } from "../../config";

export const useWorkshopsActions = () => {
  const {
    workshops: {
      fetchWorkshops,
      fetchBrands,
      bookDate,
      getUserCurrentLocation,
    },
  } = useActions();
  return {
    fetchWorkshops,
    fetchBrands,
    bookDate,
    getUserCurrentLocation,
  };
};

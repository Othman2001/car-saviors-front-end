import { useActions } from "../../config";

export const useWorkshopsActions = () => {
  const {
    workshops: { fetchWorkshops, fetchBrands, bookDate },
  } = useActions();
  return {
    fetchWorkshops,
    fetchBrands,
    bookDate,
  };
};

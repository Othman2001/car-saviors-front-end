import { useAppState } from "../../config";

export const useWorkshopState = () => {
  const {
    workshops: {
      WorkshopState: { brands, workshops, loading },
    },
  } = useAppState();

  return { brands, workshops, loading };
};

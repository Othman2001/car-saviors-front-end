import { useAppState } from "../../config";

export const useWorkshopState = () => {
  const {
    workshops: {
      WorkshopState: { brands, workshops, loading, reviews },
    },
  } = useAppState();

  return { brands, workshops, loading, reviews };
};

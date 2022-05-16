import { useAppState } from "../../config";

export const useWorkshopState = () => {
  const {
    workshops: {
      WorkshopState: { brands, workshops },
    },
  } = useAppState();

  return { brands, workshops };
};

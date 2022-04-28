import { useAppState } from "../../config";

export const useTheme = () => {
  const {
    theme: { fontFamily, lng },
  } = useAppState();
  return {
    fontFamily,
    lng,
  };
};
//

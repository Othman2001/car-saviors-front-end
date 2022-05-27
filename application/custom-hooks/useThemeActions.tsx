import { useActions } from "../../config";

export const useThemeActions = () => {
  const {
    theme: { changeLocale },
  } = useActions();

  return {
    changeLocale,
  };
};

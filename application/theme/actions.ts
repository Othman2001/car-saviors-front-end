import { I18nManager } from "react-native";
import { Action, Initialize } from "../../config";

export const onInitializeOvermind: Initialize = ({ state }) => {
  state.theme.lng = "en";
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
};

export const changeLocale: Action<{ lng: string }> = ({ state }, { lng }) => {
  state.theme.lng = lng;
  if (lng === "ar") {
    state.theme.fontFamily = "Cairo_";
  } else {
    state.theme.fontFamily = "Exo_";
  }
};

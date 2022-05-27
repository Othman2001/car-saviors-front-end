import { I18nManager } from "react-native";
import { Action, Initialize } from "../../config";
import i18n from "../../config/i18n/config";

export const onInitializeOvermind: Initialize = ({ state }) => {
  if (I18nManager.isRTL) {
    state.theme.fontFamily = "Cairo_";
    state.theme.lng = "ar";
    i18n.locale = "ar";
    console.log(I18nManager.isRTL, "ar");
  } else {
    state.theme.fontFamily = "Exo_";
    state.theme.lng = "en";
    i18n.locale = "en";
    console.log(I18nManager.isRTL, "en");
  }
};

export const changeLocale: Action<{ lng: string }> = ({ state }, { lng }) => {
  state.theme.lng = lng;
};

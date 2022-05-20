import I18n from "i18n-js";
import { Action, Initialize } from "../../config";

// export const onInitializeOvermind: Initialize = ({ state }) => {
//   state.theme.lng = "en";
//   if (state.theme.lng === "en") {
//     state.theme.fontFamily = "Exo_";
//   } else {
//     state.theme.fontFamily = "Cairo_";
//   }
// };

export const changeLocale: Action<{ lng: string }> = ({ state }, { lng }) => {
  state.theme.lng = lng;
};

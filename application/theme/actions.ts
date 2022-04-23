import { Initialize } from "../../config";

export const onInitializeOvermind: Initialize = ({ state }) => {
  state.theme.lng = "en";
  if (state.theme.lng === "en") {
    state.theme.fontFamily = "Exo_";
  } else {
    state.theme.fontFamily = "Cairo_";
  }
};

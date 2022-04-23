import i18next from "i18next";
import i18n from "i18n-js";
import { initReactI18next } from "react-i18next";
import ar from "./locale/ar.json";
import en from "./locale/en.json";

const resources = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
};

i18n.translations = { en, ar };
i18n.fallbacks = true;

export default i18n;

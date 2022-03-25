import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import DefaultPtBr from "./pt-br/default.json";
import DefaultEng from "./eng/default.json";

const resources = {
  ptBR: {
    translation: DefaultPtBr,
  },
  eng: {
    translation: DefaultEng,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ptBR",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

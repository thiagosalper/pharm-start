import i18next from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import en_US from "../lang/en_US.json";
import pt_BR from "../lang/pt_BR.json";

i18next.use(LngDetector).init({
  interpolation: {
    escapeValue: false
  },
  fallbackLng:  {
    'default': ['pt-BR'],
  },
  resources: {
    en: {
      translation: en_US
    },
    "pt-BR": {
      translation: pt_BR
    }
  }
});

export default i18next;
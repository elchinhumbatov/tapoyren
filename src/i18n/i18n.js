import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import az from "../assets/locales/az/translation.json";
import ru from "../assets/locales/ru/translation.json";
import en from "../assets/locales/en/translation.json";

const resources = {
  en: {
    translation: en,
  },
  az: {
    translation: az,
  },
  ru: {
    translation: ru,
  },
};

i18n
  // .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      resources,
      fallbackLng: "az",
      detection: {
        order: ["cookie", "localStorage", "htmlTag", "subdomain"],
        caches: ["cookie", "localStorage"],
      },
      // backend: {
      //   loadPath: '../assets/langs/{{lng}}/translation.json',
      // },
      // react: { useSuspense: false },
      interpolation: { escapeValue: false },
    },
    (error, t) => {
      if (error) console.error(error);
    }
  );

export default i18n;

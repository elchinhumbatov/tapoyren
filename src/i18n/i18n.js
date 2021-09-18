import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: "az",
      detection: {
        order: ["cookie", "localStorage", "htmlTag", "subdomain"],
        caches: ["cookie", "localStorage"],
      },
      // backend: {
      //   loadPath: '../assets/langs/{{lng}}/translation.json',
      // },
      react: { useSuspense: false },
      interpolation: { escapeValue: false },
    },
    (error, t) => {
      if (error) console.error(error);
    }
  );

export default i18n;

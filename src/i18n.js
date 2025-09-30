import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import minister_en from "./locales/eng/about/ministers.json";
import minister_so from "./locales/som/about/ministers.json";
import minsitry_en from "./locales/eng/about/ministry.json";
import minsitry_so from "./locales/som/about/ministry.json";


// department

import water_en from "./locales/eng/department/water.json";
import water_so from "./locales/som/department/water.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
         minister: minister_en,
         ministry: minsitry_en,

        //department /
        water: water_en,
        

       },
      so: {
         minister: minister_so,
         ministry: minsitry_so,
         water: water_so

       }

      
    },
    fallbackLng: "en",
    supportedLngs: ["en", "so"],
    ns: ["minister","ministry"],
    defaultNS: "minister",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    }
  });

export default i18n;

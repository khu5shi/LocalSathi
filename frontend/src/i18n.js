import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      login: "Log In",
      signup: "Sign Up",
    },
  },
  hi: {
    translation: {
      home: "होम",
      about: "के बारे में",
      services: "सेवाएं",
      contact: "संपर्क करें",
      login: "लॉग इन",
      signup: "साइन अप",
    },
  },
  bho: {
    translation: {
      home: "घर",
      about: "बारे में",
      services: "सेवा",
      contact: "संपर्क",
      login: "लॉगिन",
      signup: "साइन अप",
    },
  },
  mr: {
    translation: {
      home: "मुख्यपृष्ठ",
      about: "बद्दल",
      services: "सेवा",
      contact: "संपर्क",
      login: "लॉगिन",
      signup: "साइन अप",
    },
  },
  pa: {
    translation: {
      home: "ਘਰ",
      about: "ਬਾਰੇ",
      services: "ਸੇਵਾਵਾਂ",
      contact: "ਸੰਪਰਕ",
      login: "ਲਾਗਇਨ",
      signup: "ਸਾਇਨ ਅੱਪ",
    },
  },
  bh: {
    translation: {
      home: "घर",
      about: "बारे",
      services: "सेवा",
      contact: "संपर्क",
      login: "लॉगिन",
      signup: "साइन अप",
    },
  },
  mai: {
    translation: {
      home: "घर",
      about: "बारे",
      services: "सेवा",
      contact: "संपर्क",
      login: "लॉगिन",
      signup: "साइन अप",
    },
  },
  te: {
    translation: {
      home: "హోమ్",
      about: "గురించి",
      services: "సేవలు",
      contact: "సంప్రదించండి",
      login: "లాగిన్",
      signup: "సైన్ అప్",
    },
  },
  gu: {
    translation: {
      home: "મુખપૃષ્ઠ",
      about: "વિશે",
      services: "સેવા",
      contact: "સંપર્ક",
      login: "લોગિન",
      signup: "સાઇન અપ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: { escapeValue: false },
});

export default i18n;

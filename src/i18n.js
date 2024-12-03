import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language files for each language (you will create them in the next step)
import en from './language/en';  // English
import hn from './language/hn';  // Hindi
import mr from './language/mr';  // Marathi
import sp from './language/sp';  // Spanish
import gn from './language/gn';  // German
import fr from './language/fr';  // French
import ch from './language/ch';  // Chinese
import gj from './language/gj';  // Gujarati


// Initialize i18next
i18n
  .use(initReactI18next)  // Pass the i18next instance to react-i18next
  .init({
    resources: {
      en: en,
      hn: hn,
      mr: mr,
      sp: sp,
      gn: gn,
      fr: fr,
      ch: ch,
      gj: gj,
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if key is not found in the current language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;

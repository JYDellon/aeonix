import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Chemins des fichiers JSON
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
    fr: { translation: translationFR },
    en: { translation: translationEN },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr', // Langue par défaut
        interpolation: {
            escapeValue: false, // React gère la protection contre les XSS
        },
    });

export default i18n;

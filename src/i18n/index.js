import { createI18n } from "vue-i18n"; 
import pluralRules from "./rules/pluralization";

function guessDefaultLocale() {
  const supportedLocales = import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE;

  const persistedLocale = localStorage.getItem("user-locale");
  if (supportedLocales.includes(persistedLocale)) {
    return persistedLocale;
  }

  const browserLocale = navigator.language || navigator.userLanguage;
  const localeNoRegion = browserLocale.split("-")[0];
  if (supportedLocales.includes(browserLocale)) {
    return browserLocale;
  }
  if (supportedLocales.includes(localeNoRegion)) {
    return localeNoRegion;
  }

  return defaultLocale;
}

const messages = {};

const defaultLocale = guessDefaultLocale();
(async () => {
  const defaultMessages = await import(`./locales/${defaultLocale}.json`);
  messages[defaultLocale] = defaultMessages.default;
})();

export default createI18n({
  locale: defaultLocale,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages,
  pluralRules,
});

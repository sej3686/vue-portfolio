import { nextTick } from "vue";
import i18n from "@/i18n";

const Trans = {
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale);
  },

  getUserLocale() {
    const locale =
      window.navigator.language ||
      window.navigator.userLanguage ||
      Trans.defaultLocale;
      console.log("navigator.language:", window.navigator.language);
      console.log("navigator.languages:", window.navigator.languages);
    return {
      locale: locale,
      localeNoRegion: locale.split("-")[0],
    };
  },

  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE;
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale");
    if (Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },

  async switchLanguage(newLocale) {
    await Trans.loadLocaleMessages(newLocale);
    Trans.currentLocale = newLocale;
    document.querySelector("html").setAttribute("lang", newLocale);
    localStorage.setItem("user-locale", newLocale);
  },

  async loadLocaleMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      try {
        const messages = await import(`@/i18n/locales/${locale}.json`);
        console.log(`Loaded messages for ${locale}:`, messages);
        i18n.global.setLocaleMessage(locale, messages.default);
      } catch (error) {
        console.error(
          `[i18n] Failed to load messages for locale: ${locale}`,
          error
        );
      }
    }
    return nextTick();
  },
};

export default Trans;

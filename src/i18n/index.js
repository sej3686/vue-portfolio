import { createI18n } from "vue-i18n";
import pluralRules from "./rules/pluralization"
import da from "./locales/da.json"

const messages = {}


export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { da },
  pluralRules
})
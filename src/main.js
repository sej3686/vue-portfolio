import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

import './assets/style.scss';
import './assets/sass/reset.scss';

(async () => {
  const defaultLocale = i18n.global.locale.value;

  const messages = await import(`./i18n/locales/${defaultLocale}.json`);

  i18n.global.setLocaleMessage(defaultLocale, messages.default);

  createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');
})();

<template>
  <div class="custom-select">
    <select @change="switchLanguage" aria-label="Switch Language">
      <option
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale"
      >
        {{ t(`locale.${sLocale}`) }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.custom-select {

  select {
    appearance: none;
    background-color: #FFF;
    border: 2px solid #39b54a;
    border-radius: 0.25rem;
    color: #000;
    cursor: pointer;
    float: right;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 1.15;
    margin-right: 2em;
    margin-top: 1em;
    padding: 0.5em;
    width: 10%;
  }
}

@media (max-width: 640px) {
.custom-select {
  select {
    width: 20%;
  }
}
}
</style>

<script>
import { useI18n } from "vue-i18n";
// import { useRouter } from "vue-router";
import Tr from "@/i18n/translation";

export default {
  setup() {
    const { t, locale } = useI18n();

    const supportedLocales = Tr.supportedLocales;

    // const router = useRouter();

    const switchLanguage = async (event) => {
      const newLocale = event.target.value;
      await Tr.switchLanguage(newLocale);

      // try {
      //   await router.replace({ params: { locale: newLocale } });
      // } catch (e) {
      //   console.log(e);
      //   router.push("/");
      // }
    };

    return { t, locale, supportedLocales, switchLanguage };
  },
};
</script>

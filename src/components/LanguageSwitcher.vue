<template>
  <!-- <div class="custom-select">
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
  </div> -->
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

// .custom-select {
//   select {
//     appearance: none;
//     background-color: #fff;
//     border: 2px solid #39b54a;
//     border-radius: 0.25rem;
//     color: #000;
//     cursor: pointer;
//     float: right;
//     font-family: "Roboto", sans-serif;
//     font-weight: bold;
//     font-size: 1.15;
//     margin-right: 2em;
//     margin-top: 1.8em;
//     right: 0;
//     padding: 0.5em;
//     position: fixed;
//     z-index: 97;
//     width: 10%;
//   }
// }

// @media (max-width: 640px) {
//   .custom-select {
//     select {
//       margin-top: 12px;
//       position: fixed;
//       width: 20%;
//     }
//   }
// }
</style>

<script>
// import { useI18n } from "vue-i18n";
// import Tr from "@/i18n/translation";

// export default {
//   setup() {
//     const { t, locale } = useI18n();

//     const supportedLocales = Tr.supportedLocales;

//     const switchLanguage = async (event) => {
//       const newLocale = event.target.value;
//       await Tr.switchLanguage(newLocale);
//     };

//     return { t, locale, supportedLocales, switchLanguage };
//   },
// };
</script>

<template>
  <header class="project-header">
    <ul class="header-menu">
      <li>
        <RouterLink to="/"
          ><button><i class="arrow-header"></i></button
        ></RouterLink>
      </li>
      <li></li>
      <li>
        <div class="projects-header-select">
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
      </li>
    </ul>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

export default {
  setup() {
    const { t, locale } = useI18n();

    const supportedLocales = Tr.supportedLocales;

    const switchLanguage = async (event) => {
      const newLocale = event.target.value;
      await Tr.switchLanguage(newLocale);
    };

    return { t, locale, supportedLocales, switchLanguage };
  },
  data: () => {},

  computed: {},

  props: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
$headerColor: #333333;
$darkColor: #121111;
$lightGreenColor: #39b54a;
$darkGreenColor: #228a30;
$lightBlue: #203c98;

.projects-header-select {
  select {
    appearance: none;
    background-color: #fff;
    border: 2px solid #39b54a;
    border-radius: 0.25rem;
    color: #000;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 1rem;
    height: 30px;
    padding-left: 5px;
    width: 100px;
    z-index: 97;
  }
}

.project-header {
  position: fixed;
  width: 100%;
  z-index: 15;

  .header-menu {
    background-color: $darkColor;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    padding: 20px 20px 10px 20px;

    li {
      button {
        background-color: transparent;
        border: 3px solid $lightGreenColor;
        border-radius: 100%;
        height: 40px;
        transition: 0.2s;
        width: 40px;

        .arrow-header {
          border: solid $lightGreenColor;
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(135deg);
        }
      }

      button:hover {
        background-color: #ffffff;
        cursor: pointer;
      }
    }
  }
}
</style>

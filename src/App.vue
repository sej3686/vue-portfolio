<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageLoader from "./components/PageLoader.vue";
import Lang from "./components/Lang.vue";
// import Footer from "./components/Footer/Footer.vue";
// import ContactMe from "./components/ContactMe/ContactMe.vue";
// import AboutMe from "./components/AboutMe/AboutMe.vue";
// import Projects from "./components/Projects/Projects.vue";
// import Header from "./components/Header/Header.vue";
</script>

<template>

  <PageLoader />
  <Lang />
  <!-- <Header /> -->
  <RouterView />
  <!-- <Projects />
  <AboutMe />
  <ContactMe />
  <Footer /> -->
</template>

<style scoped>
@import "./assets/sass/reset.scss";
</style>

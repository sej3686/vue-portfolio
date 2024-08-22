<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageLoader from "./components/PageLoader.vue";
import Lang from "./components/Lang.vue";
</script>

<template>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/project">Project</RouterLink>
      </nav> -->

  <PageLoader />
  <Lang></Lang>
  <RouterView />
</template>

<style scoped></style>

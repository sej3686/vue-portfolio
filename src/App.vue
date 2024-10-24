<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageLoader from "./components/PageLoader.vue";
import Lang from "./components/Lang.vue";
</script>

<template>

  <PageLoader />
  <Lang></Lang>
  <RouterView />
</template>

<style scoped></style>

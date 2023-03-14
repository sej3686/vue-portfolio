<script setup>
import { RouterLink, RouterView } from 'vue-router';
import PageLoader from './components/PageLoader.vue';

</script>

<template>

  <PageLoader />
      
      <!--<nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/project">Project</RouterLink>
      </nav>-->
  <RouterView />
</template>

<style scoped>

</style>

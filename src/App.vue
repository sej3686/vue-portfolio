<script setup>
import { RouterLink, RouterView } from 'vue-router';
import PageLoader from './components/PageLoader.vue';

</script>


<template>
<ImageChanger/>

      
      <!--<nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/project">Project</RouterLink>
      </nav>-->
  
  <PageLoader />
  <!--<ImageSwitch />-->
  <RouterView />

  

</template>

<style scoped>

</style>

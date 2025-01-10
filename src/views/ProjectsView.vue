<script setup>
import AllProjects from "../components/AllProjects/AllProjects.vue";
import Footer from "../components/Footer/Footer.vue";
import ProjectHeader from "../components/ProjectHeader/ProjectHeader.vue";
</script>

<template>
  <ProjectHeader />

  <div class="container">
    <AllProjects />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.projects {
  padding-top: 5em;
}
</style>

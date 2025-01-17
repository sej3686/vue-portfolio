<template>
  <div id="top"></div><!-- Hellere det her end at importere hele css -->
<section id="projects" ref="comp">
    <h2 class="sec-title">{{ $t("projects.all_title") }}</h2>

    <div class="project-wrapper">

      <ProjectCard
      v-for="project in allProjects"
      :key="project.id"
      :project="project"
      />

    </div>
    
  </section>
</template>

<script>
import ProjectCard from '../Projects/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      allProjects: [
      {
          id: 'sejs_pizza',
          title: "Sej's Pizza",
          category: 'WEB APP',
          image: new URL('@/assets/img/sejs-pizza.jpg', import.meta.url).href,
          github: 'https://github.com/sej3686/sej-pizza-del',
          live: 'https://comfy-gecko-177088.netlify.app/',
          languages: ['ReactJS', 'javascript'],
        },
        {
          id: 'recraft_mobile',
          title: "ReCraft App",
          category: 'UI/UX',
          figma: 'https://www.figma.com/design/9uqqV8wiOk1EuvsdYKjDAs/App?node-id=0-1&t=D0owKcxtN0a7bvJ1-1',
          image: new URL('@/assets/img/project-recraft.jpg', import.meta.url).href,
          figma: '/',
          languages: ['figma'],
        },
        {
          id: 'rtid',
          title: "RTID by LUDO",
          category: 'WEBSITE',
          image: new URL('@/assets/img/rtid-2.jpg', import.meta.url).href,
          live: 'https://www.rtidbyludo.com/',
          languages: ['wordpress', 'php', 'figma'],
        },
        {
          id: 'llr',
          title: "Lifeline Robotics",
          category: 'WEBSITE',
          image: new URL('@/assets/img/llr-2.jpg', import.meta.url).href,
          live: 'https://lifeline.sej.one/',
          languages: ['wordpress', 'php'],
        },
        {
          id: 'wbd',
          title: "Webdock",
          category: 'WEB APP',
          image: new URL('@/assets/img/webdock-2.jpg', import.meta.url).href,
          figma: 'https://www.figma.com/design/7pRq0LW8Z510eWAnITRLTR/Lo-fi-%26-Hi-fi?node-id=0-1&t=aVPevinUwzmCRWDY-1',
          github: 'https://github.com/jacobdolleris/webdock-bachelor',
          live: 'http://www.bachelor.sej.one/',
          languages: ['vue', 'javascript', 'json', 'api', 'figma'],
        },
        {
          id: 'recraft_website',
          title: "ReCraft Website",
          category: 'UI/UX',
          image: new URL('@/assets/img/recraft-website.jpg', import.meta.url).href,
          figma: 'https://www.figma.com/design/MpvwcWAah33Of0APP7v9i9/Hjemmeside?node-id=0-1&t=mjsDi9I7pKnej8Fk-1',
          languages: ['figma'],
        },
        {
          id: 'nordbo_robotics',
          title: "Nordbo Robotics",
          category: 'WEB APP',
          image: new URL('@/assets/img/nordbo-robotics.jpg', import.meta.url).href,
          github: 'https://github.com/FrederikLandtved/Nordbo-Robotics',
          languages: ['javascript', 'firebase'],
        },
        {
          id: 'ucl',
          title: "Studievejledning",
          category: 'WEBSITE',
          image: new URL('@/assets/img/ucl.jpg', import.meta.url).href,
          github: 'https://github.com/FrederikLandtved/UCLStudievejleder',
          languages: ['javascript', 'csharp'],
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
<template>
  <section id="projects" ref="comp">
    <h2 class="sec-title">{{ $t("projects.title") }}</h2>

    <div class="project-wrapper">
      
      <ProjectCard
      v-for="project in featuredProjects"
      :key="project.id"
      :project="project"
      />

    </div>

    <div class="see-all-projects">
      <RouterLink to="/projects">
        <button>
          {{ $t("projects.see_all") }}
        </button>
      </RouterLink>
    </div>
    
  </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      featuredProjects: [
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
          image: new URL('@/assets/img/projectrecraft.jpg', import.meta.url).href,
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
          github: 'https://github.com/jacobdolleris/webdock-bachelor',
          live: 'http://www.bachelor.sej.one/',
          languages: ['vue', 'javascript', 'json', 'api'],
        },
        {
          id: 'recraft_website',
          title: "ReCraft Website",
          category: 'UI/UX',
          image: new URL('@/assets/img/recraft-website.jpg', import.meta.url).href,
          figma: '/',
          languages: ['figma'],
        },
      ]
    }
  }
};
</script>

<style lang="scss">
$darkColor: #212222;
$headerColor: #333333;
$orangeColor: #e08814;
$lightBlue: #203c98;
$darkBlue: #192b66;
$lightGreenColor: #39b54a;
$darkGreenColor: #228a30;

#projects {
  padding-top: 2em;
  width: 100%;

  .project-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    max-width: 100%;

    .project {
      background-color: transparent;
      border: 2px solid $lightGreenColor;
      border-radius: 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      min-height: 600px;
      width: 335px;

      .image-container {
        transition: 0.3s ease;
        img {
          border-radius: 8px 8px 0 0;
          height: 200px;
          width: 100%;
        }
      }

      &:hover .image-container {
        transform: scaleY(1.05) translateY(5px);
      }

      .project-info {
        display: flex;
        flex-direction: column;
        padding: 20px;

        .project-category {
          color: $darkGreenColor;
          font-size: 1.2rem;
          font-weight: 800;
        }

        .project-info-title-section {
          display: flex;
          padding-top: 10px;

          h2 {
            color: #ffffff;
            font-size: 1.7rem;
            margin-top: 5px;
          }

          .empty-space {
            flex: 1 1 0%;
            place-self: stretch;
          }

          .project-info-button-container {
            align-items: center;
            display: flex;
            flex-direction: row;
            gap: 20px;

            a {
              border-radius: 10px;
              cursor: pointer;
              outline-offset: 2px;
              transition: 0.2s;
              align-items: center;
              background: none;
              border: 2px solid #ffffff;
              border-radius: 10px;
              color: #ffffff;
              display: inline-flex;
              height: 40px;
              justify-content: center;
              position: relative;
              width: 40px;

              svg {
                display: block;
              }
            }

            a:hover {
              background-color: $lightGreenColor;
              cursor: pointer;
            }
          }
        }

        .project-info-coding-lang {
          align-items: center;
          display: flex;
          flex-direction: row;
          margin-top: 1em;
          gap: 10px;

          span {

            padding-inline-end: 5px;
            padding-inline-start: 5px;
            text-transform: uppercase;
          }

          .span-ReactJS {
            background-color: #082550;
            color: #66DBFB;
          }

          .span-javascript {
            background-color: #f0dd4ec7;
            color: #2E302C;
          }

          .span-figma {
            background-color: #1e1e1ea9;
            color: #F34E1D;
          }

          .span-wordpress {
            background-color: #ffffffb9;
            color: #21759B; 
          }

          .span-vue {
            background-color: #3A4F63;
            color: #47ba86;
          }

          .span-json {
            background-color: #000000c6;
            color: #ffffff;
          }

          .span-api {
            background-color: #21759B;
            color: #ffffff;
          }

          .span-php {
            background-color: #8D96C0;
            color: #2A2C37;
          }

          .span-firebase {
            background-color: #DD2C00;
            color: #FFC400;
          }

          .span-csharp {
            background-color: #942C86;
            color: #FFFFFF;
          }
        }

        .project-info-text {
          color: #ffffff;
          line-height: 1.6;
          margin-top: 0.5em
        }

        .project-info-button-wrapper {
          margin-top: 1em;

          a {

            button {
              background: transparent;
              border: 2px solid $lightGreenColor;
              border-radius: 5px;
              color: #ffffff;
              height: 3em;
              font-weight: bold;
              transition: 0.2s;
              width: 8.2em;
            }

            button:hover {
              background-color: #ffffff;
              border-color: $lightGreenColor;
              color: #000000;
              cursor: pointer;
            }
          }

        }
      }
    }
  }

  .see-all-projects {
    display: flex;
    justify-content: center;
    margin-top: 2.5em;

    a {

      button {
        background-color: transparent;
        border: 3px solid $lightGreenColor;
        border-radius: 30px;
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: bold;
        height: 40px;
        transition: 0.2s;
        width: 200px;
      }

      button:hover {
        background-color: #ffffff;
        border-color: $lightGreenColor;
        color: #000000;
        cursor: pointer;
      }
    }
  }
}
@import "@/assets/sass/responsive.scss";
</style>

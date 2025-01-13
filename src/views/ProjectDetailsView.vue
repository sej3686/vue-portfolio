<script setup>
import { computed } from "vue";
import Footer from "../components/Footer/Footer.vue";
import ProjectHeader from "../components/ProjectHeader/ProjectHeader.vue";

const props = defineProps(["id"]);

const projectId = computed(() => props.id);
</script>

<template>
  <img :src="project.image" :alt="$t(`projects.details.${projectId}.category`)" />
  <!-- <ProjectDetailHeader /> -->

  <ProjectHeader />

  <section class="project-details-wrapper">
    <div class="project-details">
      <h2>{{ project.category }}</h2>
      <h1>{{ project.title }}</h1>

      <p class="under-title">{{ $t(`projects.details.${projectId}.undertitle`) }}</p>

      <div class="button-wrapper">
        <a v-if="project.github" :href="project.github" target="_blank">
          <button class="project-details-button">
            {{ $t(`projects.buttons.github`) }}
            <span class="project-details-button-img">
              <svg
                stroke="#ffffff"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 100 100"
                width="2em"
                height="2em"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="none"
                />
              </svg>
            </span>
          </button>
        </a>
        <a v-if="project.live" :href="project.live" target="_blank">
          <button class="project-details-button">
            {{ $t(`projects.buttons.live`) }}
            <span class="project-details-button-img">
              <svg
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="2em"
                height="2em"
                viewBox="0 0 72 72"
                enable-background="new 0 0 72 72"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M18.321,69.07c-2.874,0-5.775-0.845-8.31-2.604l-0.534-0.371c-6.614-4.593-8.259-13.712-3.666-20.326l13.931-18.588
			c2.183-3.146,5.522-5.292,9.361-5.984c3.839-0.694,7.717,0.152,10.921,2.377l0.534,0.37c2.72,1.888,4.735,4.676,5.675,7.85
			c0.313,1.059-0.291,2.172-1.351,2.485c-1.058,0.311-2.171-0.29-2.485-1.351c-0.691-2.337-2.116-4.308-4.119-5.698l-0.534-0.37
			c-2.328-1.617-5.146-2.231-7.931-1.727c-2.787,0.503-5.212,2.061-6.828,4.388L9.055,48.108
			c-3.293,4.744-2.099,11.365,2.704,14.701l0.534,0.371c4.801,3.334,11.423,2.142,14.759-2.66l4.256-6.126
			c0.631-0.905,1.875-1.129,2.784-0.501c0.906,0.631,1.131,1.877,0.501,2.784l-4.256,6.125C27.504,66.882,22.948,69.07,18.321,69.07
			z"
                      fill="#ffffff"
                    />
                  </g>
                  <g>
                    <path
                      d="M40.297,51.043c-2.877,0-5.784-0.844-8.323-2.606l-0.538-0.375c-2.718-1.888-4.731-4.674-5.669-7.845
			c-0.313-1.06,0.292-2.172,1.351-2.485c1.063-0.313,2.173,0.291,2.485,1.351c0.69,2.335,2.114,4.305,4.117,5.696l0.538,0.375
			c4.799,3.332,11.421,2.138,14.757-2.664l13.93-18.59c3.294-4.744,2.1-11.365-2.703-14.701l-0.53-0.365
			c-2.332-1.621-5.147-2.232-7.936-1.731c-2.787,0.503-5.212,2.061-6.828,4.388l-4.255,6.125c-0.63,0.908-1.876,1.132-2.783,0.502
			s-1.132-1.876-0.502-2.783l4.255-6.125c2.225-3.205,5.564-5.351,9.404-6.043c3.838-0.691,7.718,0.153,10.922,2.379l0.529,0.365
			c6.62,4.598,8.264,13.717,3.67,20.33l-13.93,18.59C49.453,48.868,44.914,51.043,40.297,51.043z"
                      fill="#ffffff"
                    />
                  </g>
                  <g>
                    <path
                      d="M52.76,33.106c-0.209,0-0.419-0.065-0.599-0.2c-0.442-0.331-0.532-0.958-0.2-1.399l0.548-0.73
			c0.331-0.442,0.959-0.53,1.399-0.2c0.442,0.331,0.532,0.958,0.2,1.399l-0.548,0.73C53.364,32.969,53.064,33.106,52.76,33.106z"
                      fill="#ffffff"
                    />
                  </g>
                  <g>
                    <path
                      d="M55.047,30.056c-0.209,0-0.419-0.065-0.599-0.2c-0.442-0.331-0.532-0.958-0.2-1.399l4.426-5.904
			c1.061-1.528,1.471-3.414,1.134-5.28c-0.337-1.867-1.38-3.491-2.938-4.572l-0.343-0.237c-0.454-0.315-0.567-0.938-0.253-1.392
			c0.313-0.454,0.936-0.568,1.392-0.253l0.344,0.238c1.997,1.387,3.334,3.468,3.766,5.86s-0.094,4.81-1.48,6.806l-4.447,5.934
			C55.651,29.918,55.352,30.056,55.047,30.056z"
                      fill="#ffffff"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </button>
        </a>
        <a v-if="project.figma" :href="project.figma" target="_blank">
          <button class="project-details-button">
            {{ $t(`projects.buttons.figma`) }}
            <span class="project-details-button-img">
              <svg
              stroke="#ffffff"
              stroke-width="1.1"
              width="1.8em"
              height="1.8em"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                fill="none"
              />
            </svg>
            </span>
          </button>
        </a>
      </div>

      <div class="summary-box">
        {{ $t(`projects.details.${projectId}.summary`) }}
      </div>
      <div class="markdown">
        <p v-html="$t(`projects.details.${projectId}.desc1`)"></p>
        <p v-html="$t(`projects.details.${projectId}.desc2`)"></p>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
export default {
  props: ["id"],
  computed: {
    projectId() {
      return this.id;
    },
    project() {
      const projects = [
      {
          id: 'sejs_pizza',
          title: "Sej's Pizza",
          category: 'WEB APP',
          image: new URL('@/assets/img/sejs-pizza.jpg', import.meta.url).href,
          github: 'https://github.com/sej3686/sej-pizza-del',
          live: 'https://comfy-gecko-177088.netlify.app/',
        },
        {
          id: 'recraft_mobile',
          title: "ReCraft App",
          category: 'UI/UX',
          image: new URL('@/assets/img/project-recraft.jpg', import.meta.url).href,
          figma: '/',
        },
        {
          id: 'rtid',
          title: "RTID by LUDO",
          category: 'WEBSITE',
          image: new URL('@/assets/img/rtid-2.jpg', import.meta.url).href,
          live: 'https://www.rtidbyludo.com/',
        },
        {
          id: 'llr',
          title: "Lifeline Robotics",
          category: 'WEBSITE',
          image: new URL('@/assets/img/llr-2.jpg', import.meta.url).href,
          live: 'https://lifeline.sej.one/',
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
        },
        {
          id: 'nordbo_robotics',
          title: "Nordbo Robotics",
          category: 'WEB APP',
          image: new URL('@/assets/img/nordbo-robotics.jpg', import.meta.url).href,
          github: 'https://github.com/FrederikLandtved/Nordbo-Robotics',
        },
        {
          id: 'ucl',
          title: "Studievejledning",
          category: 'WEBSITE',
          image: new URL('@/assets/img/ucl.jpg', import.meta.url).href,
          github: 'https://github.com/FrederikLandtved/UCLStudievejleder',
        },
      ];
      return projects.find((proj) => proj.id === this.projectId);
    },
  },
};
</script>

<style lang="scss" scoped>
$headerColor: #333333;
$darkColor: #121111;
$lightGreenColor: #39b54a;
$darkGreenColor: #228a30;
$lightBlue: #203c98;

img {
  border-bottom: 1px solid #ffffff;
  height: 30vh;
  width: 100%;
}

.project-details-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;

  .project-details {
    // background-color: red;
    margin-top: 2em;
    position: relative;
    max-width: 450px;
    z-index: 20;

    h2 {
      color: $lightGreenColor;
    }

    h1 {
      color: #ffffff;
      font-size: 2.2rem;
      margin-top: 0.5em;
    }

    p {
      color: #ffffff;
      margin-bottom: 1em;
      margin-top: 1em;
    }

    .button-wrapper {
      display: flex;
      gap: 20px;

      a {
        .project-details-button {
          align-items: center;
          background: transparent;
          border: 2px solid $lightGreenColor;
          border-radius: 10px;
          color: #ffffff;
          font-weight: bold;
          display: inline-flex;
          height: 3em;
          line-height: 1.2;
          min-width: 10em;
          padding-inline-end: 1em;
          padding-inline-start: 1em;
          // padding-top: 10px;
          transition: 0.2s;
          white-space: nowrap;

          span {
            align-self: center;
            display: inline-flex;
            flex-shrink: 0;
            margin-inline-start: 0.8em;
          }
        }

        .project-details-button:hover {
          background-color: #33333393;
          cursor: pointer;
        }
      }
    }

    .summary-box {
      background: #33333393;
      border-color: $lightGreenColor;
      border-left-style: solid;
      border-left-width: 6px;
      color: #ffffff;
      margin-top: 2.5em;
      padding-bottom: 1em;
      padding-inline-start: 2em;
      padding-inline-end: 2em;
      padding-top: 1em;
    }

    .markdown {
      all: revert;

      p {
        margin-top: 3em;
      }
    }
  }
}
</style>

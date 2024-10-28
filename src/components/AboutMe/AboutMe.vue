<template>
  <section id="about">
    <h2 class="sec-title">{{ $t("about.title") }}</h2>

    <main class="about-wrapper reveal">
      <div class="about-img">
        <img
          :src="currentImage"
          @click="changeImage"
          alt="Stefan Emil Jespersen"
        />
      </div>
      <div class="about-text">
        <p>{{ $t("about.desc1") }}</p>
        <br />
        <p>{{ $t("about.desc2") }}</p>
      </div>
    </main>
  </section>
</template>

<script>
import image1 from "@/assets/img/profil1.jpg";
import image2 from "@/assets/img/profil2.jpg";
import image3 from "@/assets/img/profil-fun1.jpg";
import image4 from "@/assets/img/profil-fun2.jpg";
import image5 from "@/assets/img/profil-fun3.jpg";
import image6 from "@/assets/img/profil-fun4.jpg";
import image7 from "@/assets/img/profil-fun5.jpg";

export default {
  data: () => {
    return {
      images: [image1, image2, image3, image4, image5, image6, image7],
      currentImageIndex: 0,
    };
  },

  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },

  methods: {
    changeImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
  },
};
</script>

<style lang="scss" scoped>
$darkGreenColor: #228a30;
$orangeColor: #e08814;

#about {
  background-color: transparent;
  max-height: 80vh !important;
  width: 95%;

  .about-wrapper {
    display: flex;

    .about-img {
      display: flex;
      justify-content: center;
      width: 35%;

      img {
        border-radius: 100%;
        cursor: pointer;
        transition: 0.2s;
        height: 300px;
        margin-top: 10%;
        max-width: 400px;
      }

      img:hover {
        opacity: 0.8;
      }
    }

    .about-text {
      display: flex;
      flex-direction: column;
      height: 400px;
      justify-content: space-evenly;
      width: 65%;

      p {
        color: #ffffff;
        font-size: 1.2rem;
        line-height: 35px;
      }
    }
  }

  .reveal {
    position: relative;
    transform: translateX(-150px);
    opacity: 0;
    transition: all 1s ease;
  }

  .reveal.active {
    transform: translateY(0px);
    opacity: 1;
  }
}
@import "@/assets/sass/responsive.scss";
</style>

<template>
  <section id="about">
    <h2 class="sec-title">{{ $t("about.title") }}</h2>
    <h3>{{ $t("about.undertitle") }}</h3>
    <p class="about-desc">{{ $t("about.motivation") }}</p>

    <div class="about-wrapper">
      <img           
          :src="currentImage"
          @click="changeImage"
          alt="Stefan Emil Jespersen">
      <div class="about-list-wrapper">
          
          <div class="about-list-item">
          <div class="emoji">👋🏻</div>
          <p>{{ $t("about.desc1") }}</p>
        </div>

        <div class="about-list-item">
          <div class="emoji">🎓</div>
          <p>{{ $t("about.desc2") }}</p>
        </div>

        <div class="about-list-item">
          <div class="emoji">👨🏻‍💻</div>
          <p>{{ $t("about.desc3") }}</p>
        </div>

        <div class="about-list-item">
          <div class="emoji">🚀</div>
          <p>{{ $t("about.desc4") }}</p>
        </div>
      </div>
    </div>
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
$lightGreenColor: #39b54a;
$orangeColor: #e08814;

#about {
  background-color: transparent;
  margin-top: 5em;
  width: 100%;

  h3 {
    color: #ffffff;
    font-size: 1.4rem;
    margin-top: 1.2em;
  }

  .about-desc {
    color: #ffffff;
    font-size: 1.2rem;
    margin-top: 1em;
  }

  .about-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 2em;
    position: relative;

    img {
      border: 2px solid $lightGreenColor;
      border-radius: 100%;
      height: 150px;
      width: 150px;
    }

    .about-list-wrapper {

      .about-list-item {
        display: flex;
        margin-left: 2em;
        margin-top: 2em;

        .emoji {
          align-items: center;
          display: flex;
          justify-content: center
        }

        p {
          color: #ffffff;
          margin-left: 2em;
          margin-top: 0;
        }
      }
    }
  }
}
@import "@/assets/sass/responsive.scss";
</style>

<template>
  <header>
    <nav>
      <div class="off-screen-menu">
        <ul>
          <a href="#projects" aria-label="Projects"
            ><li>{{ $t("nav.projects") }}</li></a
          >
          <a href="#about" aria-label="About me"
            ><li>{{ $t("nav.about") }}</li></a
          >
          <a href="#contact" aria-label="Contact"
            ><li>{{ $t("nav.contact") }}</li></a
          >
        </ul>
      </div>

      <div id="navv">
        <div class="ham-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="mobile-header">
        <a href=""></a
        ><img id="mlogo" src="../../assets/img/logo-new-white.png" alt="logo" />
      </div>
      <div class="spacing"></div>
      <div class="header-wrapper">
        <img id="logo" src="../../assets/img/logo-new-white.png" alt="logo" />
        <ul class="main-menu">
          <li class="hover-underline-animation">
            <a href="#projects" aria-label="projects">{{
              $t("nav.projects")
            }}</a>
          </li>
          <li class="hover-underline-animation">
            <a href="#about" aria-label="About me">{{ $t("nav.about") }}</a>
          </li>
          <li class="hover-underline-animation">
            <a href="#contact" aria-label="Contact">{{ $t("nav.contact") }}</a>
          </li>
        </ul>
        <!-- Main Menu -->
      </div>
      <!-- Header Wrapper -->
    </nav>

    <section class="intro">
      <img
        class="profile-pic"
        src="../../assets/img/profil2.jpg"
        alt="Profile Picture"
      />

      <h2>{{ $t("header.intro") }} &#128075;</h2>

      <h2>
        {{ $t("header.iam") }} <span>{{ $t("header.name") }}</span>
      </h2>

      <div class="typing">
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </div>

      <div class="some-menu">
            <a
              href="https://www.linkedin.com/in/stefan-jespersen-1a79ab109/"
              aria-label="My linkedIn profile"
              ><img src="../../assets/img/icons/linkedin.png" alt="LinkedIn"
            /></a>
            <a href="https://github.com/sej3686" aria-label="My Github"
              ><img src="../../assets/img/icons/github.png" alt="Github"
            /></a>
        </div>

      <h5>{{ $t("header.experience") }}</h5>

      <div class="skills">
        <img src="../../assets/img/icons/html.png" alt="html logo" />
        <img src="../../assets/img/icons/css.png" alt="css logo" />
        <img src="../../assets/img/icons/sass.png" alt="sass logo" />
        <img src="../../assets/img/icons/js.png" alt="javascript logo" />
        <img src="../../assets/img/icons/ts.png" alt="typescript logo" />
        <img src="../../assets/img/icons/vue.png" alt="vue logo" />
        <img src="../../assets/img/icons/react.png" alt="react logo" />
      </div>
      <div class="skills">
        <img src="../../assets/img/icons/angular.png" alt="angular logo" />
        <img src="../../assets/img/icons/git.png" alt="git logo" />
        <img src="../../assets/img/icons/adobe.png" alt="adobe logo" />
        <img src="../../assets/img/icons/php.png" alt="php logo" />
        <img src="../../assets/img/icons/sql.png" alt="sql logo" />
        <img src="../../assets/img/icons/c-sharp.png" alt="c sharp logo" />
      </div>
      <a href="#projects"><div class="arrow"></div></a>
    </section>
  </header>
</template>
<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const project1 = ref(null);

    onMounted(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      };
    });
  },

  name: "typeWriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "Web Developer",
        "Multimedia Designer",
        "Graphic Designer",
      ],
      typingSpeed: 100,
      erasingSpeed: 50,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },

  computed: {},

  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },

  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");

  const offScreenMenu = document.querySelector(".off-screen-menu");
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("activee");
    offScreenMenu.classList.toggle("activee");
  });
});
</script>
<style lang="scss">
$titleFont: "Roboto", sans-serif;
$textFont: "Open Sans", sans-serif;

$headerColor: #333333;
$darkColor: #121111;
$lightGreenColor: #39b54a;
$darkGreenColor: #228a30;
$lightBlue: #203c98;

header {
  height: 100vh;

  nav {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    .mobile-header {
      display: none;
    }

    .off-screen-menu {
      display: none;
    }

    #navv {
      display: none;
    }

    .main-menu-2 {
      list-style-type: none;
      display: none;
      align-items: baseline;

      li:hover {
        cursor: pointer;
      }
    }

    .header-wrapper {
      align-items: center;
      background-color: $darkColor;
      display: flex;
      flex-direction: row;
      height: 5em;
      justify-content: space-around;
      margin-top: 5em;
      position: fixed;
      width: 100%;
      z-index: 95;

      .main-menu {
        list-style-type: none;
        display: flex;
        padding: 0;

        li {
          color: #ffffff;
          font-family: $textFont;
          margin-left: 3em;
          position: relative;

          a {
            color: #ffffff;
            text-decoration: none;
            font-size: 1.2rem;
            font-family: $textFont;
            width: 0;
          }

          a:hover {
            color: #ccc;
          }
        }

        li:hover {
          cursor: pointer;
        }
      }

      #logo {
        max-width: 150px;
      }
    }
  }
}

.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7.5em;

    .profile-pic {
      border: 2px solid #ffffff;
      border-radius: 100%;
      width: 220px;
    }

    h2 {
      color: #ffffff;
      font-family: $titleFont;
      font-size: 2.2rem;
      line-height: 2.8rem;
      margin-top: 0.5em;
      text-align: center;

      span {
        color: $lightGreenColor;
      }
    }

    .typing {
      margin-top: 2em;

      .typed-text {
        color: $lightGreenColor;
        font-family: $textFont;
        font-weight: bold;
        font-size: 2.2rem;
        text-decoration: underline;
      }
    }

    h4 {
      color: #ffffff;
      font-family: $titleFont;
      font-size: 1.9rem;
      line-height: 2.8rem;
      margin-top: 1em;
      text-align: center;
    }

    .some-menu {
        display: flex;
        margin-top: 2em;

      a {
          margin: 0 20px 0 20px;

          img {
          width: 50px;
        }
      }
        
      a:hover {
        opacity: 0.8;
      }
    }

    h5 {
      color: #ffffff;
      font-size: 2rem;
      margin-top: 1em;
    }

    .skills {
      display: flex;
      justify-content: center;
      margin-top: 1em;

      img {
        margin-top: 0.2em;
        transition: 0.2s;
      }

      img:hover {
        opacity: 0.8;
      }
    }

    .call-to-action {
      margin-top: 3em;
      button {
        background-color: $lightGreenColor;
        border: 3px solid #ffffff;
        border-radius: 30px;
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: bold;
        height: 40px;
        transition: 0.2s;
        width: 220px;
      }

      button:hover {
        background-color: #ffffff;
        border-color: $lightGreenColor;
        color: #000000;
        cursor: pointer;
      }
    }

    .arrow {
      height: 2vmin;
      left: 49.6%;
      position: absolute;
      top: 90%;
      transform: rotate(135deg);
      width: 2vmin;

      &::before {
        border-color: #fafafa;
        border-style: solid;
        border-width: 0.8vmin 0.8vmin 0 0;
        content: "";
        display: block;
        height: 100%;
        transform-origin: 100% 0;
        transition: 0.2s ease;
        width: 100%;
      }

      &:after {
        border-color: #fafafa;
        border-style: solid;
        border-width: 0 0.8vmin 0 0;
        content: "";
        float: left;
        position: relative;
        height: 100%;
        top: -100%;
        transform-origin: 100% 0;
        transition: 0.2s ease;
        width: 100%;
      }

      &:hover::after {
        border-color: $lightGreenColor;
        height: 120%;
        right: 8%;
        transform: rotate(45deg);
      }
      &:hover::before {
        border-color: $lightGreenColor;
        transform: scale(0.8);
      }
    }
  }
@import "@/assets/sass/responsive.scss";
@import "@/assets/sass/reset.scss";
</style>

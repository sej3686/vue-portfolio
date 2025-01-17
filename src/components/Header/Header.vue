<template>
  <header id="header top">
    <div class="custom-select">
      <select @change="switchLanguage" aria-label="Switch Language">
        <option
          v-for="sLocale in supportedLocales"
          :key="`locale-${sLocale}`"
          :value="sLocale"
          :selected="locale === sLocale"
        >
          {{ t(`locale.${sLocale}`) }}
        </option>
      </select>
    </div>
    <nav>
      <div class="off-screen-menu">
        <ul>
          <li class="off-screen-menu-text">
            <a href="#skills" aria-label="Skills">{{ $t("nav.skills") }}</a>
          </li>
          <li class="off-screen-menu-text">
            <a href="#projects" aria-label="Projects">{{
              $t("nav.projects")
            }}</a>
          </li>
          <li class="off-screen-menu-text">
            <a href="#about" aria-label="About me">{{ $t("nav.about") }}</a>
          </li>
          <li class="off-screen-menu-text">
            <a href="#contact" aria-label="Contact">{{ $t("nav.contact") }}</a>
          </li>
        </ul>
      </div>

      <div id="nav2">
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

      <div class="header-wrapper">
        <a href="#header"
          ><img id="logo" src="../../assets/img/logo-new-white.png" alt="logo"
        /></a>
        <ul class="main-menu">
          <li class="hover-underline-animation">
            <a href="#skills" aria-label="skills">{{ $t("nav.skills") }}</a>
          </li>
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

        <select @change="switchLanguage" aria-label="Switch Language">
          <option
            v-for="sLocale in supportedLocales"
            :key="`locale-${sLocale}`"
            :value="sLocale"
            :selected="locale === sLocale"
          >
            {{ t(`locale.${sLocale}`) }}
          </option>
        </select>
      </div>
    </nav>
  </header>

  <section class="intro">
    <div class="intro-box-text">
      <div class="title-box">
        <h1>SEJ {{ $t("header.sej") }}</h1>

        <div class="typing">
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor">|</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </div>
      </div>

      <p>{{ $t("header.desc") }} <span>{{ $t("header.name") }}</span>{{ $t("header.extionsion") }}</p>

      <div class="some-menu">
        <a
          href="https://www.linkedin.com/in/stefan-jespersen-1a79ab109/"
          aria-label="My linkedIn profile"
          target="_blank"
          ><img src="../../assets/img/icons/linkedin.png" alt="LinkedIn"
        /></a>
        <a href="https://github.com/sej3686" aria-label="My Github" target="_blank"
          ><img src="../../assets/img/icons/github.png" alt="Github"
        /></a>
        <a target="_blank" href="mailto:sej.webudvikling.com" aria-label="My Email">
          <img src="../../assets/img/icons/mail-white.png" alt="My email" />
        </a>
      </div>
    </div>
    <div class="intro-box-image">
      <img
        class="profile-pic"
        src="../../assets/img/profil0.jpg"
        alt="Profile Picture"
      />
    </div>
  </section>
  <a href="#skills"><div class="arrow"></div></a>
</template>
<script>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Tr from "@/i18n/translation";

export default {
  setup() {
    const { t, locale } = useI18n();
    const supportedLocales = Tr.supportedLocales;

    const switchLanguage = async (event) => {
      const newLocale = event.target.value;
      await Tr.switchLanguage(newLocale);
    };

    return { t, locale, supportedLocales, switchLanguage };
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

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },

  name: "MyHamburgerMenu",
  methods: {
    initializeMenu() {
      const hamMenu = document.querySelector(".ham-menu");
      const offScreenMenu = document.querySelector(".off-screen-menu");

      if (hamMenu && offScreenMenu) {
        hamMenu.classList.remove("activee");
        offScreenMenu.classList.remove("activee");

        hamMenu.addEventListener("click", () => {
          hamMenu.classList.toggle("activee");
          offScreenMenu.classList.toggle("activee");
        });

        const offScreenTexts = document.querySelectorAll(
          ".off-screen-menu-text a"
        );
        offScreenTexts.forEach((offScreenText) => {
          offScreenText.addEventListener("click", () => {
            hamMenu.classList.remove("activee");
            offScreenMenu.classList.remove("activee");
          });
        });
      }
    },

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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.initializeMenu();
    });
  },
  mounted() {
    this.initializeMenu();
  },
};
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
  min-height: 10vh;

  .custom-select {
    select {
      appearance: none;
      background-color: #fff;
      border: 2px solid #39b54a;
      border-radius: 0.25rem;
      color: #000;
      cursor: pointer;
      display: none;
      float: right;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 1.15;
      margin-right: 2em;
      margin-top: 1.2em;
      right: 0;
      padding: 0.5em;
      position: fixed;
      z-index: 97;
      width: 18%;
    }
  }

  nav {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    .mobile-header {
      display: none;
    }

    .off-screen-menu {
      align-items: center;
      background-color: #1f1e1e;
      display: none;
      flex-direction: column;
      justify-content: center;
      max-width: 100vw;
      position: fixed;
      top: -300px;
      text-align: center;
      transition: 0.3s ease;
      width: 100%;
      z-index: 5;
    }

    #nav2 {
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
      min-height: 5em;
      justify-content: space-around;
      margin-top: 5em;
      position: fixed;
      width: 80%;
      z-index: 95;

      .main-menu {
        list-style-type: none;
        display: flex;

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

      a:hover {
        opacity: 0.8;
      }

      #logo {
        max-width: 150px;
      }

      select {
        appearance: none;
        background-color: #fff;
        border: 2px solid #39b54a;
        border-radius: 0.25rem;
        color: #000;
        cursor: pointer;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 1rem;
        height: 30px;
        margin-left: 100px;
        padding-left: 5px;
        width: 100px;
        z-index: 97;
      }
    }
  }
}

.intro {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 70vh;
  justify-content: center;
  margin-bottom: 20vh;

  .intro-box-text {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    padding: 10px;
    width: 55%;

    .title-box {
      display: flex;
      flex-direction: column;
      width: 100%;

      h1 {
        color: $lightGreenColor;
        font-family: $titleFont;
        font-size: 3rem;
        line-height: 3.8rem;
        margin-top: 0.5em;

        span {
          color: $lightGreenColor;
        }
      }

      .typing {
        width: 100%;

        .typed-text {
          color: $lightGreenColor;
          font-family: $textFont;
          font-weight: bold;
          font-size: 2rem;
          text-decoration: underline;
        }
      }
    }

    p {
      color: #ffffff;
      font-size: 1.4rem;
      margin-top: 2em;

      span {
        color: $lightGreenColor;
      }

      span:hover {
        text-decoration: underline;
      }
    }

    .some-menu {
      display: flex;
      margin-top: 2em;

      a {
        img {
          width: 40px;
        }
      }

      a:nth-child(2),
      a:nth-child(3) {
        margin-left: 2em;
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
    }
  }

  .intro-box-image {
    align-items: center;
    display: flex;
    min-height: 100%;
    padding: 10px;
    width: 45%;

    img {
      box-shadow: rgba(80, 80, 80, 0.35) 0px 5px 15px;
    }
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
    right: 10%;
    transform: rotate(45deg);
  }
  &:hover::before {
    border-color: $lightGreenColor;
    transform: scale(0.8);
  }
}
@import "@/assets/sass/responsive.scss";
@import "@/assets/sass/reset.scss";
</style>

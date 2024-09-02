<template>
  <div class="container">
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
          <img id="mlogo" src="../assets/img/logo-new-white.png" alt="logo" />
        </div>
        <div class="spacing"></div>
        <div class="header-wrapper">
          <img id="logo" src="../assets/img/logo-new-white.png" alt="logo" />
          <ul class="main-menu">
            <li class="hover-underline-animation">
              <a href="#projects" aria-label="projects">{{ $t("nav.projects") }}</a>
            </li>
            <li class="hover-underline-animation">
              <a href="#about" aria-label="About me">{{ $t("nav.about") }}</a>
            </li>
            <li class="hover-underline-animation">
              <a href="#contact" aria-label="Contact">{{ $t("nav.contact") }}</a>
            </li>
          </ul>
          <!-- Main Menu -->

          <!-- <ul class="main-menu-2">
            <a href="#projects"><li>Projects</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul> -->
          <!-- Main Menu 2 -->

          <ul class="some-menu">
            <li>
              <a href="https://www.linkedin.com/in/stefan-jespersen-1a79ab109/"
              aria-label="My linkedIn profile"
                ><img src="./../components/icons/linkedin.png" alt="LinkedIn"
              /></a>
            </li>
            <li>
              <a href="https://github.com/FisterMedister"
              aria-label="My Github"
                ><img src="./../components/icons/github.png" alt="Github"
              /></a>
            </li>
            <!-- <li><a href="https://sej.one/old-portfolio/"><img src="./../components/icons/wordpress.png" alt="Wordpress"></a></li> -->
          </ul>
        </div>
        <!-- Header Wrapper -->
      </nav>

      <section class="header-box-wrapper">
        <img
          class="profile-pic"
          src="../assets/img/profil2.jpg"
          alt="Profile Picture"
        />

        <h2>{{ $t("header.intro") }} &#128075;</h2>

        <h2>{{ $t("header.iam") }} <span>{{ $t("header.name") }}</span></h2>

        <div class="typeing">
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor">|</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </div>

        <h4>
          <!-- I'm a Junior Web Developer <br />
          with various experiences in
          <br />
          both web-design and multi-media -->
        </h4>

        <h5>{{ $t("header.experience") }}</h5>

        <div class="skills">
          <img src="../assets/img/icons/html.png" alt="html logo" />
          <img src="../assets/img/icons/css.png" alt="css logo" />
          <img src="../assets/img/icons/sass.png" alt="sass logo" />
          <img src="../assets/img/icons/js.png" alt="javascript logo" />
          <img src="../assets/img/icons/ts.png" alt="typescript logo" />
          <img src="../assets/img/icons/vue.png" alt="vue logo" />
          <img src="../assets/img/icons/react.png" alt="react logo" />
        </div>
        <div class="skills">
          <img src="../assets/img/icons/angular.png" alt="angular logo" />
          <img src="../assets/img/icons/git.png" alt="git logo" />
          <img src="../assets/img/icons/adobe.png" alt="adobe logo" />
          <img src="../assets/img/icons/php.png" alt="php logo" />
          <img src="../assets/img/icons/sql.png" alt="sql logo" />
          <img src="../assets/img/icons/c-sharp.png" alt="c sharp logo" />
        </div>
        <!-- <a class="call-to-action" href="#projects"
          ><button>Check out my website!</button></a
        > -->
      </section>
    </header>

    <section id="projects" ref="comp">
      <h2 class="sec-title">{{ $t("projects.header") }}</h2>

      <div ref="project1" class="project-wrapper animate-2 reveal">
        <div class="project">
          <a
            href="https://github.com/FrederikLandtved/UCLStudievejleder"
            target="_blank"
            aria-label="Link to my first project"
            ><img src="../assets//img/UCL-case.jpg" alt=""
          /></a>
        </div>

        <div class="desc">
          <h2>UCL Studievejleder</h2>
          <p>{{ $t("projects.ucl_desc1") }}</p>
          <br>
          <p>{{ $t("projects.ucl_desc2") }}</p>
          <p>{{ $t("projects.ucl_desc3") }}</p>
          <a
            href="https://github.com/FrederikLandtved/UCLStudievejleder"
            target="_blank"
            aria-label="Link to my first project"
            ><button class="visit-button">{{ $t("projects.git_btn") }}</button></a
          >
        </div>
      </div>
      <!-- project-wrapper -->

      <div class="project-wrapper animate-3 reveal">
        <div class="desc">
          <h2>RTID by Ludo</h2>
          <p>{{ $t("projects.rtid_desc1") }}</p>
          <p>{{ $t("projects.rtid_desc2") }}</p>
          <br>
          <p>{{ $t("projects.rtid_desc3") }}</p>
            
          
          <a href="https://www.rtidbyludo.com/" target="_blank"
          aria-label="Link to my second project"
            ><button class="visit-button">{{ $t("projects.visit_web") }}</button></a
          >
        </div>

        <div class="project">
          <a href="https://www.rtidbyludo.com/" target="_blank"
          aria-label="Link to my first project"
            ><img src="../assets/img/rtid-2.jpg" alt="RTID by Ludo"
          /></a>
        </div>
      </div>
      <!-- project-wrapper -->

      <div class="project-wrapper reveal">
        <div class="project">
          <a href="https://www.lifeline.sej.one" target="_blank"
          aria-label="Link to my third project"
            ><img src="../assets/img/llr-2.jpg" alt="Lifeline Robotics"
          /></a>
        </div>

        <div class="desc">
          <h2>Lifeline Robotics</h2>
          <p>{{ $t("projects.lr_desc1") }}</p>
          <p>{{ $t("projects.lr_desc2") }}</p>
          <br>
          <p>{{ $t("projects.lr_desc3") }}</p>
          
          <a href="https://www.lifeline.sej.one" target="_blank"
          aria-label="Link to my third project"
            ><button class="visit-button">{{ $t("projects.visit_web") }}</button></a
          >
        </div>
      </div>
      <!-- project-wrapper -->

      <div class="project-wrapper reveal">
        <div class="desc">
          <h2>Webdock</h2>
          <p>{{ $t("projects.wbd_desc1") }}</p>
          <p>{{ $t("projects.wbd_desc2") }}</p>
          <br>
          <p>{{ $t("projects.wbd_desc3") }}</p>
          <a href="http://www.bachelor.sej.one" target="_blank"
          aria-label="Link to my fourth project"
            ><button class="visit-button">{{ $t("projects.visit_web") }}</button></a
          >
        </div>

        <div class="project">
          <a href="http://www.bachelor.sej.one" target="_blank"
          aria-label="Link to my fourth project"
            ><img src="../assets/img/webdock-2.jpg" alt="Bachelor project"
          /></a>
        </div>
      </div>
      <!-- project-wrapper -->
    </section>
    <!-- Projects -->

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
          <br>
          <p>{{ $t("about.desc2") }}</p>
        </div>
      </main>
    </section>
    <!-- About -->

    <section id="contact">
      <h2 class="sec-title">{{ $t("contact.title") }}</h2>

      <main class="contact-container reveal">
        <!-- <h3>Send me an Email</h3> -->
        <form
          action="https://formspree.io/f/mnqybnwq"
          method="post"
          class="form-box"
          id="form-box"
        >
          <div class="field" tabindex="0">
            <label for="fname"
              ><img src="../assets/img/icons/man.png" alt="man icon" />
              {{ $t("contact.name") }}</label
            >
            <input
              autocomplete="name"
              id="fname"
              required
              name="name"
              type="text"
              placeholder="firstname surname"
            />
          </div>

          <div class="field" tabindex="0">
            <label for="femail"
              ><img src="../assets/img/icons/mail.png" alt="mail icon" />
              {{ $t("contact.email") }}</label
            >
            <input
              autocomplete="email"
              required
              id="femail"
              name="email"
              type="email"
              placeholder="email@domain.com"
            />
          </div>

          <div class="field" tabindex="0">
            <label for="message"
              ><img
                src="../assets/img/icons/pen-papir.png"
                alt="pen and papir icon"
              />
              {{ $t("contact.message") }}</label
            >
            <textarea
              name="message"
              minlength="10"
              id="message"
              cols="30"
              rows="4"
              placeholder="type here"
            ></textarea>
          </div>

          <!-- <input name="submit" value="Send" type="submit" > -->
          <button name="submit" value="Send" type="submit">
            {{ $t("contact.send_btn") }}
          </button>
        </form>
      </main>
    </section>
    <!-- About -->

    <footer>
      <p>©Stefan E. J.</p>

      <img src="../assets/img/logo-new-white.png" alt="logo" />

      <p>{{ $t("footer.made_by") }}</p>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import image1 from "@/assets/img/profil1.jpg";
import image2 from "@/assets/img/profil2.jpg";
import image3 from "@/assets/img/profil-fun1.jpg";
import image4 from "@/assets/img/profil-fun2.jpg";
import image5 from "@/assets/img/profil-fun3.jpg";
import image6 from "@/assets/img/profil-fun4.jpg";
import image7 from "@/assets/img/profil-fun5.jpg";

export default {
  setup() {
    // const { t } = useI18n()

    // return { t }
    // const keyword = ref(null);
    const project1 = ref(null);

    // const handleIntersect = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     // console.log('entry: ', entry)
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add("animate");
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // };

    onMounted(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      };

      // const observer = new IntersectionObserver(handleIntersect, options);
      // observer.observe(keyword.value);
    });

    // return { keyword };
  },

  name: "typeWiriter",
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

      images: [image1, image2, image3, image4, image5, image6, image7],
      currentImageIndex: 0,
    };
  },

  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },

  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },

  methods: {
    /*handleScroll() {
      if(this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },*/

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

    changeImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
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
    // else {
    //   reveals[i].classList.remove('active');
    // }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");

  const offScreenMenu = document.querySelector(".off-screen-menu");

  // console.log(hamMenu);
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("activee");
    offScreenMenu.classList.toggle("activee");
  });
});
</script>

<template>
  <div class="container">
    <!-- <div ref="scrollTopButton" class="scrollToTop">&uarr;</div> -->
    <header>
      <nav>
        <div class="off-screen-menu">
          <ul>
            <a href="#projects"><li>Projects</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>

        <div id="navv">
          <div class="ham-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="header-wrapper">
          <img id="logo" src="../assets/img/logo-new-white.png" alt="logo" />
          <ul class="main-menu">
            <li class="hover-underline-animation">
              <a href="#projects">Projects</a>
            </li>
            <li class="hover-underline-animation">
              <a href="#about">About</a>
            </li>
            <li class="hover-underline-animation">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <!-- Main Menu -->

          <ul class="main-menu-2">
            <a href="#projects"><li>Projects</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
          <!-- Main Menu 2 -->

          <ul class="some-menu">
            <li>
              <a href="https://www.linkedin.com/in/stefan-jespersen-1a79ab109/"
                ><img src="./../components/icons/linkedin.png" alt="LinkedIn"
              /></a>
            </li>
            <li>
              <a href="https://github.com/FisterMedister"
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

        <h2>
          Hi &#128075;
          <br />
          I'm <span>Stefan</span>
        </h2>

        <div class="typeing">
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor">|</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </div>

        <h4>
          I'm a Junior Web Developer <br />
          <!-- with various experiences in
          <br />
          both web-design and multi-media -->
        </h4>

        <h5>I have experiance in:</h5>

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
        <a class="call-to-action" href="#keyword"><button>Check out my website!</button></a>
      </section>
    </header>

    <section ref="keyword" id="keyword">
      <h2 class="sec-title">Keywords</h2>

      <main class="keyword-grid-wrapper reveal">
        <div class="keyword-grid-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
          <!-- <img class="img-1" src="../assets/img/code.png" alt="code icon" /> -->
          <h3>Coder</h3>
          <p>
            What I do when I'm not busy doing other things, is coding for fun.
            I've been doing various projects
          </p>
        </div>
        <div class="keyword-grid-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
          <!-- <img src="../assets/img/gallery.png" alt="gallery icon" /> -->
          <h3>Designer</h3>
          <p>
            Because of my earlier degree. I have experience in various Adobe
            programs.
          </p>
        </div>
        <div class="keyword-grid-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
          <!-- <img src="../assets/img/handshake.png" alt="handshake icon" /> -->
          <h3>Friendly</h3>
          <p>
            All of my former work places have appreciated how friendly and
            accommodating I am.
          </p>
        </div>
      </main>
      <!-- keyword-grid-wrapper -->
    </section>
    <!-- Keyword -->

    <section id="projects" ref="comp">
      <h2 class="sec-title">Featured Projects</h2>

      <div ref="project1" class="project-wrapper animate-2 reveal">
        <div class="project">
          <a href="https://github.com/FrederikLandtved/UCLStudievejleder"
            ><img src="../assets//img/UCL-case.jpg" alt=""
          /></a>
        </div>

        <div class="desc">
          <h2>UCL Studievejleder</h2>
          <p>This is a website made for an exam</p>
          <p>
            The website is for the school of UCL's "study guide" teachers of
            whom helps students with all sorts of problems they may encounter.
            <br />The application is made in C# and html
          </p>
          <p>Note: this website is not up at the moment</p>
          <a href="https://github.com/FrederikLandtved/UCLStudievejleder"
            ><button class="visit-button">Visit Git repo</button></a
          >
        </div>
      </div>
      <!-- project-wrapper -->

      <div class="project-wrapper animate-3 reveal">
        <div class="desc">
          <h2>RTID by Ludo</h2>
          <p>This is a webshop that I've been helping developing on</p>
          <p>
            The website is for a company called "RTID by Ludo". The company in
            question is a shop where people buy clothing and other materials
            from Northern Thailand and where by buying said items, you're
            helping the local population <br />
            The webshop is made in WordPress
          </p>
          <a href="https://www.rtidbyludo.com/"
            ><button class="visit-button">Visit Website</button></a
          >
        </div>

        <div class="project">
          <a href="https://www.rtidbyludo.com/"
            ><img src="../assets/img/rtid-2.jpg" alt="RTID by Ludo"
          /></a>
        </div>
      </div>
      <!-- project-wrapper -->

      <div class="project-wrapper reveal">
        <div class="project">
          <a href="https://www.lifeline.sej.one"
            ><img src="../assets/img/llr-2.jpg" alt="Lifeline Robotics"
          /></a>
        </div>

        <div class="desc">
          <h2>Lifeline Robotics</h2>
          <p>This is a website from when I was an intern</p>
          <p>
            The website was made to be their new offical website. Due to time
            constraints it was never finished. <br />The website is made in
            WordPress
          </p>
          <a href="https://www.lifeline.sej.one"
            ><button class="visit-button">Visit Website</button></a
          >
        </div>
      </div>
      <!-- project-wrapper -->

      <div class="project-wrapper reveal">
        <div class="desc">
          <h2>Webdock - bachelor project</h2>
          <p>This is a website for my bachelor project</p>
          <p>
            For the bachelor project we had webdock as a client. The site's
            purpose is to configure a server in the easiest and user-friendly
            way as possible. The project was made in Vue3.
          </p>
          <a href="http://www.bachelor.sej.one"
            ><button class="visit-button">Visit Website</button></a
          >
        </div>

        <div class="project">
          <a href="http://www.bachelor.sej.one"
            ><img src="../assets/img/webdock-2.jpg" alt="Bachelor project"
          /></a>
        </div>
      </div>
      <!-- project-wrapper -->
    </section>
    <!-- Projects -->

    <section id="about">
      <h2 class="sec-title">About Me</h2>

      <main class="about-wrapper reveal">
        <div class="about-img">
          <img
            :src="currentImage"
            @click="changeImage"
            alt="Stefan Emil Jespersen"
          />
        </div>
        <div class="about-text">
          <p>
            I'm 24 years old and I've just recently graduated at UCL (University
            College Lillebælt) where I studied the Web-developer line.<br />
            The thing that I like about Web-devloping, is that not only do you
            learn about essential editing programs like the Adobe packs, but
            also coding and various analyses methods that are currently being
            used in the professional environment.
          </p>
          <p>
            My past working experiences have made me more aware of the working
            environment, and how to tackle certain things like keeping focus
            etc.
          </p>
        </div>
      </main>
    </section>
    <!-- About -->

    <section id="contact">
      <h2 class="sec-title">Let's get in Touch!</h2>

      <main class="contact-container reveal">
        <!-- <h3>Send me an Email</h3> -->
        <form
          action="https://formspree.io/f/mnqybnwq"
          method="post"
          class="form-box"
          id="form-box"
        >
          <div class="field" tabindex="1">
            <label for="fname"
              ><img src="../assets/img/icons/man.png" alt="man icon" />
              Name</label
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

          <div class="field" tabindex="2">
            <label for="femail"
              ><img src="../assets/img/icons/mail.png" alt="mail icon" />
              Email</label
            >
            <input
              autocomplete="femail"
              required
              id="femail"
              name="email"
              type="email"
              placeholder="email@domain.com"
            />
          </div>

          <!-- <div class="field">
          <label for="fptext">Subject</label>
          <input id="fptext" required name="plaintext" type="text" placeholder="Your subject">
          </div> -->

          <div class="field" tabindex="3">
            <label for="message"
              ><img
                src="../assets/img/icons/pen-papir.png"
                alt="pen and papir icon"
              />
              Message</label
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
            Send Me Message
          </button>
        </form>
      </main>
    </section>
    <!-- About -->

    <footer>
      <p>©Stefan E. J.</p>

      <img src="../assets/img/logo-new-white.png" alt="logo" />

      <p>Made personally by Stefan E. J.</p>
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
    const keyword = ref(null);
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

    return { keyword };
  },

  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "Web Developer",
        "Multimedia Designer",
        "Graphics Designer",
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

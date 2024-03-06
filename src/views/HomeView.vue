<template>
  <div class="container">
    <header>
      <nav>
        <img id="logo" src="../assets/img/logo-new-white.png" alt="logo" />
        <ul class="main-menu">
          <!--<a href=""><li class="hover-underline-animation" >Home</li></a>-->
          <!-- <li class="hover-underline-animation"><a href="#">Skills <span>&dtrif;</span></a>
          <ul class="drop-down">
            <div class="icon-row">            
            <div><img src="../assets/img/html.png" alt="html logo"></div>
            <div><img src="../assets/img/css.png" alt="css logo"></div>
            <div><img src="../assets/img/js.png" alt="javascript logo"></div>
            <div><img src="../assets/img/vue.png" alt="vue logo"></div>
            <div><img src="../assets/img/git.png" alt="git logo"></div>
          </div>

          <div class="icon-row">            
            <div><img src="../assets/img/adobe.png" alt="adobe logo"></div>
            <div><img src="../assets/img/sass.png" alt="sass logo"></div>
            <div><img src="../assets/img/php.png" alt="php logo"></div>
            <div><img src="../assets/img/sql.png" alt="sql logo"></div>
            <div><img src="../assets/img/c-sharp.png" alt="c sharp logo"></div>
          </div>

        </ul></li>Drop Down -->
          <li class="hover-underline-animation">
            <a href="#projects">Projects</a>
          </li>
          <li class="hover-underline-animation"><a href="#about">About</a></li>
          <li class="hover-underline-animation">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <!-- Main Menu -->

        <ul class="main-menu-2">
          <!--<a href=""><li class="hover-underline-animation" >Home</li></a>-->
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
      </nav>

      <section class="header-box-wrapper">
        <img class="profile-pic" src="../assets/img/profil2.jpg" />

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
          I'm a newly graduated Web Developer <br />
          with various experiences in
          <br />
          both web-design and multi-media
        </h4>

        <h5>I experiance in:</h5>

        <div class="skills">
          <img src="../assets/img/icons/html.png" alt="html logo" />
          <img src="../assets/img/icons/css.png" alt="css logo" />
          <img src="../assets/img/icons/sass.png" alt="sass logo" />
          <img src="../assets/img/icons/js.png" alt="javascript logo" />
          <img src="../assets/img/icons/ts.png" alt="typescript logo" />
          <img src="../assets/img/icons/vue.png" alt="vue logo" />
          <img src="../assets/img/icons/react.png" alt="react logo" />
          <br />
          <img src="../assets/img/icons/angular.png" alt="angular logo" />
          <img src="../assets/img/icons/git.png" alt="git logo" />
          <img src="../assets/img/icons/adobe.png" alt="adobe logo" />
          <img src="../assets/img/icons/php.png" alt="php logo" />
          <img src="../assets/img/icons/sql.png" alt="sql logo" />
          <img src="../assets/img/icons/c-sharp.png" alt="c sharp logo" />
        </div>

        <!-- <div class="header-div-left">
          <div class="header-div-left-textbox">
            <h3>Hi &#128075;</h3>
            <h2>I'm <span>Stefan</span></h2>
            <span class="typed-text">{{ typeValue }}</span>
            <span class="blinking-cursor">|</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            <h4>
              I'm a newly graduated Web Developer with various experiences in
              <br />
              both web-design and multi-media
            </h4> -->
        <!-- <h4>Interested? Then check out my <span>Portfolio</span></h4> -->
        <!-- <h5>I have experiance in:</h5> -->
        <!-- <a href="#keyword"><button>Check it out <span>&dtrif;</span></button></a> -->
        <!-- <h4>And Welcome To My <span>Portfolio!</span></h4> -->

        <!-- <div class="skills">
              <img src="../assets/img/icons/html.png" alt="html logo" />
              <img src="../assets/img/icons/css.png" alt="css logo" />
              <img src="../assets/img/icons/sass.png" alt="sass logo" />
              <img src="../assets/img/icons/js.png" alt="javascript logo" />
              <img src="../assets/img/icons/ts.png" alt="typescript logo" />
              <img src="../assets/img/icons/vue.png" alt="vue logo" />
              <img src="../assets/img/icons/react.png" alt="react logo" />
              <br />
              <img src="../assets/img/icons/angular.png" alt="angular logo" />
              <img src="../assets/img/icons/git.png" alt="git logo" />
              <img src="../assets/img/icons/adobe.png" alt="adobe logo" />
              <img src="../assets/img/icons/php.png" alt="php logo" />
              <img src="../assets/img/icons/sql.png" alt="sql logo" />
              <img src="../assets/img/icons/c-sharp.png" alt="c sharp logo" />
            </div>
          </div>
        </div>

        <div class="header-div-right">
          <img
            class="header-div-right-img"
            src="../assets/img/profil2.jpg"
            alt="Stefan"
          />
        </div> -->
      </section>
    </header>

    <section ref="keyword" id="keyword">
      <h2 class="sec-title">Keywords</h2>

      <main class="keyword-grid-wrapper">
        <div class="keyword-grid-item">
          <img src="../assets/img/code.png" alt="code icon" />
          <h3>Coder</h3>
          <p>
            What I do when I'm not busy doing other things, is coding for fun.
          </p>
        </div>
        <div class="keyword-grid-item">
          <img src="../assets/img/gallery.png" alt="gallery icon" />
          <h3>Designer</h3>
          <p>
            Because of my earlier degree. I have experience in various Adobe
            programs.
          </p>
        </div>
        <div class="keyword-grid-item">
          <img src="../assets/img/handshake.png" alt="handshake icon" />
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

      <div ref="project1" class="project-wrapper animate-2">
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

      <div class="project-wrapper animate-3">
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

      <div class="project-wrapper">
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

      <div class="project-wrapper">
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

      <main class="about-wrapper">
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

      <!-- <main class="about-grid-wrapper">
  <div class="about-grid-item">
    <div class="about-div-img">
      <img :src="currentImage" @click="changeImage" alt="Stefan Emil Jespersen">
    </div>
  </div>

  <div class="about-grid-item">
    <div class="about-textbox">
    <h3>Resumé</h3>
    <p>I'm 24 years old
      and I just recently graduated at UCL (University College Lillebælt)
      where I studied the Web-developer line.<br>
      The thing that I like about Web-devloping,
      is that not only do you learn about essential editing programs
      like the Adobe packs, but also coding and various analyses methods
      that are currently being used in the professional environment.</p>

      <p>My past working experiences have made me more aware
      of how the working environment, and how to tackle certain things
      like keeping focus etc. </p>
  </div>
  </div>
</main> -->
    </section>
    <!-- About -->

    <section id="contact">
      <h2 class="sec-title">Let's get in Touch!</h2>

      <main class="contact-container">
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

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        // console.log('entry: ', entry)
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    };

    onMounted(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(keyword.value);
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
</script>

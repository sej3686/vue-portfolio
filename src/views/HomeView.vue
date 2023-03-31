<script setup>
</script>

<template>
  <header>
    <nav>
      <img id="logo" src="../assets/img/logo-new-white.png" alt="logo">
      <ul>
        <!--<a href=""><li class="hover-underline-animation" >Home</li></a>-->
        <li class="hover-underline-animation"><a href="#">Skills &dtrif;</a>
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

        </ul></li>
        <li class="hover-underline-animation"><a href="#projects">Projects</a></li>
        <li class="hover-underline-animation"><a href="#about">About</a></li>
        <li class="hover-underline-animation"><a href="#contact">Contact</a></li>
       
      </ul>
    </nav>

    <section class="header-box-wrapper">
      
    <div class="header-div-left">
      <div class="header-div-left-textbox">
      <h3>Hi, my name is</h3>
      <h2>Stefan E. Jespersen</h2>
      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      <h4>And Welcome To My <span>Portfolio!</span></h4>
        </div>
          </div><!-- Header Left Box -->

    <div class="header-div-right">
      <div class="header-div-right-imagebox">
      <img class="header-div-right-img" src="../assets/img/profil2.jpg" alt="Stefan">
    </div>
    </div><!-- Header Right Box -->
  </section>

    <div class="header-div-some">
        <!--<h2>SoMe</h2>-->
        <a href="#"><img src="./../components/icons/linkedin.png" alt="LinkedIn"></a>
        <a href="#"><img src="./../components/icons/github.png" alt="Github"></a>
        <a href="https://sej.one/old-portfolio/"><img src="./../components/icons/wordpress.png" alt="Wordpress"></a>
        <a href="https://twitter.com/Fister_Medister"><img src="./../components/icons/twitter.png" alt="Twitter"></a>
      </div><!-- Header SoMe Box -->

  </header>

  <section id="keyword">
    <h2>Keywords</h2>

    <main class="keyword-grid-wrapper">
      <div class="keyword-grid-item">
        <img src="../assets/img/code.png" alt="code icon">
        <h3>Coder</h3>
        <p>What I do when I'm not busy doing other things, is coding for fun.</p>
      </div>
      <div class="keyword-grid-item">
        <img src="../assets/img/gallery.png" alt="gallery icon">
        <h3>Designer</h3>
        <p>Because of my earlier decree. I have experiance in varoious Adobe programms.</p>
      </div>
      <div class="keyword-grid-item">
        <img src="../assets/img/handshake.png" alt="handshake icon">
        <h3>Friendly</h3>
        <p>All of my former work places have appreciated how friendly and accommodating I am.</p>
      </div>
    </main><!-- keyword-grid-wrapper -->

  </section><!-- Keyword -->

  <section id="projects" ref="comp">
    <h2>Featured Projects</h2>

    <main class="project-grid-wrapper">

      <a href="https://www.ucl.dk" class="project-grid-item">
        <img src="../assets/img/ucl.jpg" alt="UCL logo">
        <div class="project-grid-item-titlebox">
        <h4>UCL studievejledning</h4>
      </div></a>
      <a href="https://www.rtidbyludo.com/" class="project-grid-item">
        <img src="../assets/img/rtid.jpg" alt="RTID by LUDO logo">
        <div class="project-grid-item-titlebox">
        <h4>Made wordpress for RTID by Ludo</h4>
      </div></a>
      <a href="https://www.lifeline.sej.one" class="project-grid-item">
        <img src="../assets/img/llr.jpg" alt="Lifeline Robotics logo">
        <div class="project-grid-item-titlebox">
        <h4>Internship at Lifeline Robotics</h4>
      </div></a>

    </main><!-- project-grid-wrapper -->
  </section><!-- Projects -->

  <section id="about">

<h2>About Me</h2>

<main class="about-grid-wrapper">
  <div class="about-grid-item">
    <div class="about-div-img" id="app">
      <img src="@/assets/img/profil1.jpg" alt="Stefan Emil Jespersen" id="imgClickAndChange" onclick="changeImage()">
    </div>
  </div>

  <div class="about-grid-item">
    <div class="about-textbox">
    <h3>Resumé</h3>
    <p>I'm 23 years old
      and am currently a student at UCL (University College Lillebælt)
      where I study the Web-developer line
      The thing that I like about Web-devloping,
      is that not only do you learn about essential editing programs
      like the Adobe packs, but also coding and various analyses methods
      that are currently being used in the professional environment</p>

      <p>My past working experiences have made me more aware
      of how the working environment, and how to tackle certain things
      like keeping focus etc. </p>
  </div>
  </div>
</main>

</section><!-- About -->

  <section id="contact">

    <main class="contact-container">
      <h3>Send me an Email</h3>
      <form action="https://formspree.io/f/mnqybnwq" method="post" class="form-box">

        <div class="row">
          <div class="row-first">
          <label for="">Name *</label>
          <input type="text" placeholder="Your name">
        </div>

        <div class="row-first">
          <label for="">Email *</label>
          <input type="email" placeholder="Your email">
        </div>

        </div><!-- row -->

        <div class="row">
          <div class="row-rest">
          <label for="">Subject</label>
          <input type="text" placeholder="Your subject">
          </div>
        </div>

        <div class="row">
          <div class="row-rest">
          <label for="message">Message *</label>
          <textarea name="message" id="message" cols="30" rows="4" placeholder="Write your message..."></textarea>
          </div>
        </div>

        <div class="row justify-center">
          <div class="row-last">
          <input type="submit">
        </div>
        </div>

      </form>
    </main>






    

  </section><!-- About -->

  <footer>
    <p>©LOLOLOL</p>

    <img src="../assets/img/logo-new-white.png" alt="logo">

    <p>Made personally by Stefan E. Jespersen</p>

</footer>



</template>

<script>
import { reactive } from 'vue';
import image1 from '@/assets/img/profil1.jpg';
import image2 from '@/assets/img/profil2.jpg';

/*
const comp = ref(null)
function scrollTo() {
  comp.value.scrollIntoView({ behavior: 'smooth' })
}*/

export default {
  
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Web Developer", "Multimedia Designer", "Graphics Designer", "Coder", "Worker"],
      typingSpeed: 100,
      erasingSpeed: 50,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },

  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },

  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
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
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
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
  
  setup() {
    const state = reactive({
      imageUrl: image1
    });

    function changeImage() {
      state.imageUrl = state.imageUrl === image1 ? image2 : image1;
    }
    return {
      imageUrl: state.imageUrl,
      changeImage
    }

  }
};
</script>
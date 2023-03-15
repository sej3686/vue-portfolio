<script setup>

</script>

<template>
  <header>
    <nav>
      <img id="logo" src="../assets/img/logo-new-white.png" alt="logo">
      <ul>
        <!--<a href=""><li class="hover-underline-animation" >Home</li></a>-->
        <a href="#projects"><li class="hover-underline-animation">Projects</li></a>
        <a href="#about"><li class="hover-underline-animation">About</li></a>
        <a href="#contact"><li class="hover-underline-animation">Contact</li></a>
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
      <img class="header-div-right-img" src="../assets/img/profil2.jpg">
    </div>
    </div><!-- Header Right Box -->
  </section>

    <div class="header-div-some">
        <!--<h2>SoMe</h2>-->
        <a href="#"><img src="./../components/icons/linkedin.png" alt="LinkedIn"></a>
        <a href="#"><img src="./../components/icons/github.png" alt="Github"></a>
        <a href="#"><img src="./../components/icons/wordpress.png" alt="Wordpress"></a>
        <a href="https://twitter.com/Fister_Medister"><img src="./../components/icons/twitter.png" alt="Twitter"></a>
      </div><!-- Header SoMe Box -->

  </header>

  <section id="keyword">
    <h2>Keywords</h2>

    <main class="keyword-grid-wrapper">
      <div class="keyword-grid-item">
        <img src="../assets/img/code.png">
        <h3>Coder</h3>
        <p>What I do when I'm not busy doing other things, is coding for fun.</p>
      </div>
      <div class="keyword-grid-item">
        <img src="../assets/img/gallery.png">
        <h3>Designer</h3>
        <p>Because of my earlier decree. I have experiance in varoious Adobe programms.</p>
      </div>
      <div class="keyword-grid-item">
        <img src="../assets/img/handshake.png">
        <h3>Friendly</h3>
        <p>All of my former work places have appreciated how friendly and accommodating I am.</p>
      </div>
    </main><!-- keyword-grid-wrapper -->

  </section><!-- Keyword -->

  <section id="projects" ref="comp">
    <h2>Featured Projects</h2>

    <main class="project-grid-wrapper">

      <a href="" class="project-grid-item"><div class="project-grid-item-titlebox">
        <h4>UCL</h4>
      </div></a>
      <a href="" class="project-grid-item"><div class="project-grid-item-titlebox">
        <h4>Lifeline Robotics</h4>
      </div></a>
      <a href="" class="project-grid-item"><div class="project-grid-item-titlebox">
        <h4>Rtidbyludo</h4>
      </div></a>
      <a href="" class="project-grid-item"><div class="project-grid-item-titlebox">
        <h4>Vue</h4>
      </div></a>

    </main><!-- project-grid-wrapper -->
  </section><!-- Projects -->

  <section id="about">

    <h2>About Me</h2>

    <main class="about-grid-wrapper">
      <div class="about-grid-item"></div>
      <div class="about-grid-item"></div>
    </main>

  </section><!-- About -->

  <section id="contact">
    
    <h2>Contact</h2>

  </section><!-- About -->

</template>

<script>
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
      displayTextArray: ["Web-Developer", "Multi-Media-Designer", "Graphics-designer", "Coder", "Worker"],
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
};
</script>
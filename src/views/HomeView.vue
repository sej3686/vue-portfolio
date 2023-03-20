<script setup>
</script>

<template>
  <header>
    <nav>
      <img id="logo" src="../assets/img/logo-new-white.png" alt="logo">
      <ul>
        <!--<a href=""><li class="hover-underline-animation" >Home</li></a>-->
        <li>Skills &dtrif;</li>
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
  <div class="about-grid-item">
    <div class="about-div-img" id="app">
      <img src="../assets/img/profil1.jpg" alt="">
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
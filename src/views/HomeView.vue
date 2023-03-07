<script setup>

</script>

<template>
  <header>
    <nav>
      <img id="logo" src="../assets/img/logo-new-white.png" alt="logo">
      <ul>
        <li class="hover-underline-animation">Home</li>
        <li class="hover-underline-animation">Projects</li>
        <li class="hover-underline-animation">About</li>
        <li class="hover-underline-animation">Contact</li>
      </ul>
    </nav>

    <section>
    <div class="header-div-left">
      <h3>Hi my name is</h3>
      <h2>Stefan E. Jespersen</h2>
      <h2>And Welcome To My <span style="color: #AC4A5F">Portfolio!</span></h2>
      <h4>I'm a</h4>
      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </div>

    <div class="header-div-right">
      <div class="header-div-right-img"></div>

      <div class="header-div-right-some">
        <h2>SoMe</h2>

        <a href="#"><img src="./../components/icons/linkedin.png" alt=""></a>
        <a href="#"><img src="./../components/icons/github.png" alt=""></a>
        <a href="#"><img src="./../components/icons/wordpress.png" alt=""></a>
        <a href="#"><img src="./../components/icons/twitter.png" alt=""></a>
      </div>
    </div>
      
  </section>

  </header>
</template>

<script>
export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Web-Developer", "Multi Media Designer", "Editor", "Coder", "Worker"],
      typingSpeed: 100,
      erasingSpeed: 100,
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
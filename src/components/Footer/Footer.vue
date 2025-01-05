<template>
  <footer>
    <p>©Stefan E. J.</p>

    <img src="../../assets/img/logo-new-white.png" alt="logo" />

    <p>{{ $t("footer.made_by") }}</p>
    <a href="#header"><button>↑</button></a>
  </footer>
</template>

<style lang="scss" scoped>
$lightGreenColor: #39b54a;
$darkGreenColor: #228a30;
$darkColor: #212222;

footer {
  display: flex;
  height: 8vh;
  justify-content: space-evenly;
  width: 100%;

  p {
    color: #ffffff;
    font-size: 1rem;
    margin-top: 1.2em;
  }

  img {
    max-width: 40%;
  }

  a {

    button {
      background: transparent;
      border: 3px solid $lightGreenColor;
      border-radius: 100%;
      color: #ffffff;
      font-size: 20px;
      height: 35px;
      margin-top: 0.5em;
      position: absolute;
      right: 5em;
      transition: 0.2s;
      width: 35px;
    }

    button:hover {
      background-color: #ffffff;
      border-color: $lightGreenColor;
      color: #000000;
      cursor: pointer;
      }
  }
}
@import "@/assets/sass/responsive.scss";
</style>

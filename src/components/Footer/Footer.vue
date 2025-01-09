<template>
  <footer>
    <p>©Stefan E. J.</p>

    <img src="../../assets/img/logo-new-white.png" alt="logo" />

    <p>{{ $t("footer.made_by") }}</p>
    <a href="#header"
      ><button><div class="arrow-footer"></div></button
    ></a>
  </footer>
</template>

<style lang="scss" scoped>
$lightGreenColor: #39b54a;
$darkGreenColor: #228a30;
$darkColor: #212222;

footer {
  display: flex;
  min-height: 8vh;
  justify-content: space-evenly;
  margin-top: 5em;
  width: 100%;

  p {
    color: #ffffff;
    font-size: 1rem;
    margin-top: 1.2em;
  }

  img {
    max-width: 180px;
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

      .arrow-footer {
        border: solid $lightGreenColor;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-135deg);
      }
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

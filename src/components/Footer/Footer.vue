<template>
  <footer>
    <p>©Stefan E. J.</p>

    <img src="../../assets/img/logo-new-white.png" alt="logo" />

    <p>{{ $t("footer.made_by") }}</p>
  </footer>
</template>

<style lang="scss" scoped>
$darkGreenColor: #228a30;
$darkColor: #212222;

footer {
  background-color: transparent;
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
    // max-width: 150px;
    max-width: 40%;
  }
}
@import "@/assets/sass/responsive.scss";
</style>

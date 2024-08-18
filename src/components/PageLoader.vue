<template>
  <div class="load-wrapper">
    <div class="vertical-div">
      <h1>One man's dream</h1>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.load-wrapper {
  animation: moveWrapper 0.01s forwards;
  // animation-duration: 2s;
  animation-duration: 2s;
  background-color: #121111;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 10;
  transition: 1s ease;
  transform: translateY(-100%);

  .vertical-div {
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    h1 {
      animation: fadeIn 0.75s forwards;
      color: #ffffff;
      font-size: 40px;
      text-align: center;
    }
  }

  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    border: 3px solid;
    border-color: #fff #fff transparent transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent #228a30 #228a30;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }
  .loader::before {
    width: 32px;
    height: 32px;
    border-color: #fff #fff transparent transparent;
    animation: rotation 1.5s linear infinite;
  }

  @keyframes fadeIn {
    0% {
      font-size: 0px;
    }
    100% {
      font-size: 40px;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes moveWrapper {
    0% {
      transform: translateY(0%);
    }

    80% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-100%);
    }
  }
}

// @media only screen and (max-width: 675px) {

//  .load-wrapper {
//    .vertical-div {

//      h1 {
//        font-size: 40px !important;
//      }
//    }

//  }

// }
</style>

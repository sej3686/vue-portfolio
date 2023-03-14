<template>
  <div class="load-wrapper">
  <span class="loader" v-if="!isloaded"></span>
</div>
</template>

<script>
  /*export default {
    data: () => {
      return {
        isloaded: false
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if(document.readyState == "complete") {
          this.isloaded = true;
        }
      }
      
    }
  }*/
</script>

<style lang="scss" scoped>

.load-wrapper {
  animation: moveWrapper 0.01s forwards;
  animation-duration: 3s;
  background-color: #333333;
  height: 100vh;
  position: absolute;
  width: 100vw;
  z-index: 10;
  transition: 1s ease;
  transform: translateY(-100%);

  span {
    display: table;
    margin: 0 auto;
    top: 45%;
  }

  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    border: 3px solid;
    border-color: #FFF #FFF transparent transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after,
  .loader::before {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent #228A30 #228A30;
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
    border-color: #FFF #FFF transparent transparent;
    animation: rotation 1.5s linear infinite;
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

</style>
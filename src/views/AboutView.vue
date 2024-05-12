<template>
  <div class="wrapper">
  <div ref="keyword" class="box"></div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const keyword = ref(null);

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };

    onMounted(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Change threshold as per requirement
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(keyword.value);
    });

    return { keyword };
  }
};
</script>

<style>
.wrapper {
  margin-top: 100vh;
  margin-bottom: 10vh;
}

.box {
  width: 800px;
  height: 100px;
  background-color: red;
  /* Define your default styles here */
}

.animate {
  /* Define your CSS animation here */
  animation-name: slideIn;
  animation-duration: 1s;
}

@keyframes slideIn {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
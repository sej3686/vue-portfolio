<template>
  <div class="wip">
    <h1>{{ $t("project_vue.title") }}</h1><button @click="goBack">{{ $t("project_vue.back") }}</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.go(-1);
    };

    return { goBack }
  }
}
</script>

<style>
.wip {
  align-items: center;
  justify-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h1 {
    color: #39b54a;
    font-size: 5rem;
    margin-bottom: 0.5em;
  }

  button {
    background-color: transparent;
    border: 3px solid #39b54a;
    border-radius: 30px;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.1rem;
    height: 40px;
    min-width: 220px;
    transition: 0.2s;
  }

  button:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
}

@media (max-width: 640px) {
  .wip {
    h1 {
      font-size: 2.5rem;
    }
  }
}
</style>

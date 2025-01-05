<template>
  <div class="projects">
    <h1>Work In Progress</h1>
    <RouterLink to="/"><button>Go Back</button></RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .projects {
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
    }

    button {
      background-color: transparent;
      border: 3px solid #39b54a;
      border-radius: 30px;
      color: #ffffff;
      font-weight: 700;
      font-size: 1.1rem;
      height: 40px;
      margin-top: 2em;
      min-width: 220px;
      transition: 0.2s;
    }

    button:hover {
      background-color: #ffffff;
      color: #000000;
      cursor: pointer;
    }
  }
}
</style>

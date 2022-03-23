<template>
    <HomePage/>
</template>

<script>
import HomePage from "./components/HomePage.vue"

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
body {
    margin: 0;
    background-color: #38325c;
    background-image: url(assets/background.png);
}

@font-face {
  font-family: Centurion;
  src: url(assets/The_Centurion.otf);
}

@font-face {
  font-family: HappySchool;
  src: url(assets/Happy_School.otf);
}

#app {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

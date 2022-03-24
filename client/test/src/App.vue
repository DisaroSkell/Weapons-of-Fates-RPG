<template>
    <div>
        <div v-if="!infight">
            <div class="navbar">
                <div class="nav-elem">Home</div>
                <div class="nav-elem">Profile</div>
                <div class="nav-elem" @click="fight">FOOT</div>
                <div class="nav-elem">Bestiary</div>
            </div>
        </div>
        <Fight v-if="infight"/>
    </div>
</template>

<script>
import Fight from "./components/Fight-component.vue"

export default {
  name: "App",
  components: {
    Fight,
  },
  data() {
    return {
      infight: false,
    }
  },
  methods: {
    fight() {
      this.infight = true
    }
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

<style scoped>
    .navbar {
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #504E5C;
        padding: 10px 0 10px 0;
        border-bottom: solid #201f27;
        height: 5%;
        text-align: center;
    }

    .nav-elem {
        color: black;
        text-decoration: none;
        font-size: 2vw;
        margin: 5px 10px 5px 10px;
        display: inline;
        cursor: pointer;
        user-select: none;
    }

    .nav-elem:hover {
        background-color: green;
    }
</style>
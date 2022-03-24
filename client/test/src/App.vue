<template>
    <div>
        <div v-if="!infight">
            <div class="navbar">
                <router-link to="./" class="nav-elem home clicker">Home</router-link>
                <div class="nav-elem fight clicker" @click="fight">Fight</div>
                <div class="nav-elem">
                    <div class="sign" v-if="!connected">
                        <router-link to="./signin" class="signbutton clicker">Sign in</router-link>
                        <router-link to="./signup" class="signbutton clicker">Sign up</router-link>
                    </div>
                    <div v-if="connected">Profile</div>
                </div>
            </div>
            <div class="navbarmargin"></div>
            <router-view/>
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
            connected: false,
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
    @font-face {
        font-family: EnchantedLand;
        src: url(assets/Enchanted_Land.otf);
    }

    body {
        margin: 0;
        background-color: #38325c;
        background-image: url(assets/background.png);
    }

    #app {
        margin: 0;
        font-family: EnchantedLand, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .clicker {
        cursor: pointer;
        user-select: none;
    }
</style>

<style scoped>

    .navbarmargin {
        height: 10vh;
        width: 100%;
    }

    .navbar {
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #646177;
        border-bottom: solid #201f27;
        height: 10%;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    .nav-elem {
        color: black;
        text-decoration: none;
        height: 100%;
        width: fit-content;
        line-height: 200%;
        font-size: 5vh;
        padding: 0 20px;
        display: inline-block;
    }

    .home:hover {
        background-color: green;
    }

    .fight:hover {
        background-color: red;
    }

    .sign {
        display: inline;
        font-size: 3vh;
    }

    .signbutton {
        text-decoration: none;
        color: black;
    }
</style>
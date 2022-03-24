<template>
    <div>
        <div v-if="!infight">
            <div class="navbar">
                <router-link to="./" class="nav-elem home clicker">Home</router-link>
                <div class="fight clicker" @click="fight">Fight</div>
                <div class="nav-elem">
                    <router-link to="./signin" class="signbutton clicker" v-if="!connected">Sign in</router-link>
                    <div v-if="connected" class="profile clicker">Profile</div>
                </div>
            </div>
            <div class="navbarmargin"></div>
            <div v-if="admin">
                <AdminBar/>
                <div class="adminbarmargin"></div>
            </div>
            <router-view/>
        </div>
        <div v-if="popup" class="blackfilter">
            <div class="popupbox">
                <div class="exit-button clicker" @click="closepopup">x</div>
                Test
            </div>
        </div>
        <Fight v-if="infight"/>
    </div>
</template>

<script>
import Fight from "./components/Fight-component.vue"
import AdminBar from "./components/AdminBar.vue"

export default {
    name: "App",
    components: {
        Fight,
        AdminBar,
    },
    data() {
        return {
            infight: false,
            connected: false,
            admin: true,
            popup: false,
        }
    },
    methods: {
        fight() {
            this.infight = true
        },
        closepopup() {
            this.popup = false
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
        height: 10.5vh;
        width: 100%;
    }

    .adminbarmargin {
        height: 5.5vh;
        width: 100%;
    }

    .navbar {
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #646177;
        border-bottom: solid #201f27;
        border-width: .5vh;
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

    .fight {
        background-color: violet;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border: solid #201f27;
        border-top: hidden;
        border-width: .5vh;
        height: fit-content;
        width: fit-content;
        font-size: 7vh;
        padding: 0 20px;
        display: inline-block;
    }

    .fight:hover {
        background-color: red;
    }

    .profile {
        padding: 0 20px;
    }

    .profile:hover {
        background-color: brown;
    }

    .signbutton {
        font-size: 3vh;
        text-decoration: none;
        color: black;
    }

    .blackfilter {
        position: fixed;
        z-index: 10;
        background-color: black;
        top: 0;
        opacity: 50%;
        height: 100%;
        width: 100%;
    }

    .popupbox {
        opacity: 100%;
        background-color: #8679DB;
        margin: 25vh 25%;
        height: 50%;
        width: 50%;
        padding: 1%;
    }

    .exit-button {
        text-align: center;
        font-size: 30px;
        border: solid black;
        border-radius: 100%;
        display: table;
        margin: 2% 2% auto auto;
        width: 5%;
        height: 0;
        background-color: brown;
    }
</style>
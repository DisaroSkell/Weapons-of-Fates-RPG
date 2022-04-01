<template>
    <div>
        <div v-if="currentURL != '/fight'">
            <div class="navbar">
                <router-link to="/" class="nav-elem home clicker">Home</router-link>
                <router-link to="/fight" class="fight clicker">Fight</router-link>
                <div class="nav-elem">
                    <router-link to="/signin" v-if="!connected" class="signbutton clicker">Sign in</router-link>
                    <router-link to="/profile" v-if="connected" class="profile clicker nav-elem">Profile</router-link>
                </div>
            </div>
            <div class="navbarmargin"></div>
            <div v-if="admin">
                <AdminBar/>
                <div class="adminbarmargin"></div>
            </div>
        </div>
        <router-view/>
        <div v-if="popup" class="blackfilter">
            <div class="popupbox">
                <div class="exit-button clicker" @click="closepopup">x</div>
                Test
            </div>
        </div>
    </div>
</template>

<script>
import AdminBar from "./components/AdminBar.vue"
import UserService from "./services/user"

export default {
    name: "App",
    components: {
        AdminBar,
    },
    data() {
        return {
            admin: false,
            infight: false,
            popup: false,
        }
    },
    computed: {
        connected() {
            return this.$store.state.auth.status.loggedIn
        },
        currentUser() {
            return this.$store.state.auth.user
        },
        currentURL() {
            return this.$router.currentRoute.value.fullPath
        },
    },
    created() {
        UserService.getAdminBoard().then( () => {
            this.admin = true
        }, () => {
            this.admin = false
        })
    },
    watch: {
        currentUser() {
            UserService.getAdminBoard().then( () => {
                this.admin = true
            }, () => {
                this.admin = false
            })
        }
    },
    methods: {
        closepopup() {
            this.popup = false
        },
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

    .clicker:disabled {
        cursor: not-allowed;
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
        text-decoration: none;
        color: black;
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
<template>
    <div class="signinblock">
        Sign in to Weapons of Fates RPG
        <div v-if="message" class="err-msg" role="alert">{{ message }}</div>
        <div class="infoblock">
            <div>
                Username or email address <br>
                <input class="input" name="username" type="text" v-model="username" @keyup.enter="handleLogin"> <br>
            </div>
            <div>
                Password <br>
                <input class="input" name="password" type="password" v-model="password" @keyup.enter="handleLogin"> <br>
            </div>
            <div class="enterbutton clicker" @click="handleLogin">Sign in</div>
        </div>
        Not registered yet ? <router-link to="./signup"> Sign up </router-link> now !
    </div>
</template>

<script>
export default {
    name: "SignIn",
    data() {
        return {
            loading: false,
            message: "",
            username: "",
            password: "",
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn
        },
        user() {
            return { // We enter login as username but is handle as username/email in api
                username: this.username,
                password: this.password
            }
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/profile")
        }
    },
    methods: {
        handleLogin() {
            if (this.username === "" || this.password === "") {
                this.message = "Please fill all the fields."
                return
            }
            this.loading = true
            this.$store.dispatch("auth/login", this.user).then( () => {
                this.$router.push("/profile")
            },
            (error) => {
                this.loading = false
                this.message = error.response.data.message
            })
        },
    },
}
</script>

<style scoped>
    .signinblock {
        padding: 2% 0;
        margin: 3% 30%;
        width: 40%;
        height: fit-content;
        font-size: 4vh;
        word-spacing: 0.1em;
        text-align: center;
        border-radius: 20px;
        background-color: #8679DB;
    }

    .infoblock {
        padding: 2% 0;
        margin: 3% 15%;
        width: 70%;
        height: fit-content;
        font-size: 4vh;
        text-align: center;
        border-radius: 20px;
        background-color: #C4BFE1;
    }

    .enterbutton {
        background-color: royalblue;
        margin: 2% 30% 0;
        width: 40%
    }

    .enterbutton:disabled {
        opacity: 50%;
    }

    .input {
        width: 50%;
        text-align: center;
    }

    .err-msg {
        background-color: brown;
        color: red;
        width: 50%;
        border: solid rgb(112, 20, 20);
        border-radius: 15px;
        margin: 2% 25% 0;
    }
</style>
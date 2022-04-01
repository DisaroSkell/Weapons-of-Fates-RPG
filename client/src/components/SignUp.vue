<template>
    <div class="signupblock">
        Join the world of Weapons of Fates RPG
        <div v-if="message" class="err-msg" role="alert">{{ message }}</div>
        <div class="infoblock">
            <div>
                Email address <br>
                <input class="input" type="email" v-model="email" @keyup.enter="handleRegister"> <br>
                <div v-if="!validEmail" class="err-msg little">
                    Email should look like this: something@something
                </div>
            </div>
            <div>
                Username <br>
                <input class="input" type="text" v-model="username" @keyup.enter="handleRegister"> <br>
                <div v-if="!validUsername" class="err-msg little">
                    Username should be 5-20 long and contain only letters (a-z, A-Z),
                    numbers (0-9) and special characters in this list: ' - _
                </div>
            </div>
            <div>
                Password <br>
                <input class="input" type="password" v-model="password" @keyup.enter="handleRegister"> <br>
            </div>
            <div>
                Confirm password <br>
                <input class="input" type="password" v-model="password2" @keyup.enter="handleRegister"> <br>
            </div>
            <div class="enterbutton clicker" @click="handleRegister" :disabled="allFilled">Sign up</div>
        </div>
        Already have an account ? Sign in <router-link to="./signin">here</router-link> !
    </div>
</template>

<script>
export default({
    name: "SignUp",
    data() {
        return {
            successful: false,
            loading: false,
            message: "",
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn
        },
        user() {
            return {
                username: this.username,
                email: this.email,
                password: this.password
            }
        },
        allFilled() {
            return !(this.username === "" || this.email === "" || this.password === "" || this.password2 ==="")
        },
        validUsername() {
            const conformUsername = new RegExp("^([a-zA-Z]|[0-9]|-|_|')*$")
            return (this.username === "")   // We don't want to bother if it is empty
            || ((this.username.length >= 5) // Username should be 5 or more characters
            && (this.username.length <= 20) // Username should be 20 or less characters
            && (conformUsername.test(this.username)))
        },
        validEmail() {
            const conformEmail = new RegExp(".{3,}@.{1,}")
            return (this.email === "")      // We don't want to bother if it is empty
            || (conformEmail.test(this.email))
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push("/profile")
        }
    },
    methods: {
        handleRegister() {
            this.message = ""
            this.successful = false
            if (!this.validUsername || !this.validEmail || !this.allFilled) {
                this.message = "Please fill all the fields correctly."
                return
            }
            if (this.password != this.password2) {
                this.message = "Passwords are not matching."
                return
            }
            this.loading = true
            this.$store.dispatch("auth/register", this.user).then( () => {
                this.$router.push("/")
                this.message = "Redirect failed, please go to home page"
            },
            (error) => {
                this.loading = false
                this.successful = false
                try {
                    this.message = error.response.data.message
                } catch (err) {
                    this.message = error.message
                }
            })
        } 
    },
})
</script>

<style scoped>
    .signupblock {
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
        background-color: red;
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

    .little {
        font-size: 3vh;
    }
</style>
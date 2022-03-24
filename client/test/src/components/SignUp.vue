<template>
    <div class="signupblock">
        Join the world of Weapons of Fates RPG
        <div class="infoblock">
            Email address <br>
            <input class="input" type="email"> <br>
            Username <br>
            <input class="input" type="text"> <br>
            Password <br>
            <input class="input" type="password"> <br>
            Confirm password <br>
            <input class="input" type="password"> <br>
            <div class="enterbutton clicker" @click="tata">Sign up</div>
        </div>
        Already have an account ? Sign in <router-link to="./signin">here</router-link> !
    </div>
</template>

<script>
export default({
    methods: {
        tata() {
            return 0
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

    .input {
        width: 50%;
        text-align: center;
    }
</style>
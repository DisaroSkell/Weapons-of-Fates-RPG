<template>
    <div class="signupblock">
        Join the world of Weapons of Fates RPG
        <div class="infoblock">
            Email address
            <input type="text">
            Username
            <input type="text">
            Password
            <input type="text">
            Confirm password
            <input type="text">
            <div class="enterbutton" @click="tata">Sign up</div>
        </div>
        Already have an account ? <router-link to="./signin"> Sign in here ! </router-link>
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
        font-size: 50px;
    }
</style>
<template>
    <div class="signinblock">
        Sign in to Weapons of Fates RPG
        <div class="infoblock">
            Username or email address
            <input type="text">
            Password
            <input type="text">
            <div class="enterbutton" @click="tata">Sign in</div>
        </div>
        Not registered yet ? <router-link to="./signup"> Sign up now ! </router-link>
    </div>
</template>

<script>
export default({
    data() {
        return {}
    },
    methods: {
        tata() {
            return 0
        }
    },
})
</script>

<style scoped>
    .signinblock {
        font-size: 50px;
    }
</style>
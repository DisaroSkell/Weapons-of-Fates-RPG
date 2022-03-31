<template>
    <div v-if="this.currentUser" class="profile-info">
        <div>{{ currentUser.username }}'s Profile</div>
        <div>Inventory</div>
        <div @click="logout" class="disconnect clicker">Disconnect</div>
    </div>
</template>
<script>
export default {
    name: 'Profile-component',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        console.log(this.currentUser);
        if (!this.currentUser) {
            this.$router.push('/signin');
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("auth/logout").then( () => {
                this.$router.push("/")
            },
            (error) => {
                this.loading = false
                try {
                    this.message = error.response.data.message
                } catch (err) {
                    this.message = error.message
                }
            })
        }
    }
};
</script>
<style scoped>
    .profile-info {
        background-color: #8679DB;
        border: solid black;
        border-radius: 15px;
        width: 40%;
        margin: 1% 30%;
        padding: 1%;
        font-size: 3vh;
    }

    .disconnect:hover {
        background-color: aqua;
    }
</style>
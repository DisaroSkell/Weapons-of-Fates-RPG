<template>
    <div class="enemies-list">
        <Enemy v-for="enemy in enemiesTab"
        :key="enemy.ide"
        :name="enemy.namee"
        :health="enemy.health_maxe"
        :XP="enemy.xp_reward"
        :Gold="enemy.gold_reward"
        :Strength="enemy.strength"
        :Resistance="enemy.resistance"
        :Weekness="enemy.weekness"/>
    </div>
</template>
<script>
import Enemy from "./Enemy-component.vue"
import UserService from "../services/user"
import axios from 'axios'

export default {
    name: "Enemies-component",
    components: {
        Enemy
    },
    data() {
        return {
            enemiesTab: []
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn
        },
    },
    created() {
        if (this.loggedIn) {
            UserService.getAdminBoard().then( () => {
                this.fetchData()
            }, () => {
                this.$router.push("/")
            })
        }
    },
    methods: {
        fetchData() {
            try {
                const request = axios({
                    method: 'get',
                    url: 'http://localhost:6942/enemies',
                    reponseType: 'stream'
                })
                request.then((res) => {
                    this.enemiesTab = res.data
                })
            } catch (err) {
                console.error(err.message)
            }
        }
    },
}
</script>
<style scoped>
    .enemies-list {
        background-color: #8679DB;
        border: solid black;
        border-radius: 15px;
        width: 40%;
        margin: 1% 30%;
        padding: 1%;
        font-size: 3vh;
    }
</style>
<template>
    <div class="enemies-list">
        <router-link to="/enemies/create" class="addbutton clicker">Add one</router-link>
        <Enemy v-for="enemy in enemiesTab"
        :key="enemy.ide"
        :name="enemy.namee"
        :health="enemy.health_maxe"
        :XP="enemy.xp_reward"
        :Gold="enemy.gold_reward"
        :StrengthFK="enemy.strength"
        :ResistanceFK="enemy.resistance"
        :WeeknessFK="enemy.weekness"/>
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
                axios({
                    method: 'get',
                    url: 'https://weaponsoffates-api.herokuapp.com/enemies',
                    reponseType: 'stream'
                }).then((res) => {
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
    .addbutton {
        margin: 1% auto auto 1%;
        width: fit-content;
        background-color: green;
        padding: .3%;
        border: solid black;
        border-radius: 15px;
        font-size: 3vh;
        text-decoration: none;
        color: black;
        display: flex;
    }

    .addbutton:hover {
        background-color: lightgreen;
    }
</style>
<template>
    <div>
        <router-link to="/" class="exitbutton clicker">Leave</router-link>
        <div class="enemy-info">
            <div class="enemy-name">{{ enemy.namee }}</div>
            <div class="life-info">
                <div class="life-bar-red"></div>
                <div class="life-amount">{{ current_healthE }}/{{ enemy.health_maxe }}</div>
            </div>
        </div>
        <div class="player-info">
            <div class="player-name">{{ player.username }}</div>
            <div class="life-info">
                <div class="life-bar-green"></div>
                <div class="life-amount"> {{ player.current_health }}/{{ player.health_maxp }}</div>
            </div>
        </div>
        <div class="action-menu">
            Chose an action:
            <div class="action clicker">Attack</div>
            <div class="action clicker" v-if="player.chosen_ability1">{{ player.chosen_ability1 }}</div>
            <div class="action clicker" v-if="player.chosen_ability2">{{ player.chosen_ability2 }}</div>
        </div>
        <div class="dialog">Long text here</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            isEditing: true,
            enemy: null,
            current_healthE: null,
            player: null,
        }
    },

    created() {
        try {
            axios({
                method: 'get',
                url: 'https://weaponsoffates-api.herokuapp.com/enemies',
                reponseType: 'stream'
            }).then( (res) => {
                const totalEnemies = res.data.length

                this.enemy = res.data[this.getRandomInt(totalEnemies)-1]
                this.current_healthE = this.enemy.health_maxe
            })
            axios({
                method: 'get',
                url: 'https://weaponsoffates-api.herokuapp.com/Players/' + this.currentUser.username,
                reponseType: 'stream'
            }).then( (res) => {
                this.player = res.data[0]
            })
        } catch (err) {
            console.error(err.message)
        }
    },

    computed: {
        currentUser() {
            return this.$store.state.auth.user
        },
    },

    beforeMount() {
        window.addEventListener("beforeunload", this.preventNav)
    },

    beforeUnmount() {
        window.removeEventListener("beforeunload", this.preventNav);
    },

    methods: {
        preventNav(event) {
            if (!this.isEditing) return
            event.preventDefault()
            event.returnValue = ""
        },
        getRandomInt(max) { // Gives random int between 1 & max
            if (max <= 0) {
                return 0
            }
            return Math.floor(Math.random() * max) + 1
        }
    }
}
</script>

<style scoped>
    .enemy-info, .player-info, .action-menu, .dialog, .exitbutton {
        font-size: 25px;
        border: solid black;
        border-radius: 15px;
        background-color: #504E5C;
        position: absolute;
    }

    .exitbutton {
        top: 1%;
        left: 1%;
        width: fit-content;
        padding: .5%;
        background-color: brown;
        text-decoration: none;
        color: black;
    }

    .exitbutton:hover {
        background-color: red;
    }

    .enemy-info {
        width: 30%;
        top: 1%;
        right: 1%;
    }

    .player-info {
        width: 20%;
        bottom: 1%;
        left: 1%;
    }

    .action-menu {
        padding: 1%;
        width: 20%;
        bottom: 1%;
        right: 1%;
    }

    .dialog {
        font-size: 30px;
        width: 52%;
        height: fit-content;
        margin-left: 22%;
        bottom: 1%;
        padding: 1% 0 1% 1%;
    }

    .enemy-name, .player-name {
        border-bottom: solid black;
        padding: 15px 15px 10px 15px;
        text-align: left;
    }

    .life-info {
        padding: 15px 10px 5px 10px;
    }

    .life-bar-red, .life-bar-green {
        border: solid black;
        border-width: 2px;
        border-radius: 30px;
        height: 15px;
        width: 100%;
    }

    .life-bar-red {
        background-color: red;
    }

    .life-bar-green {
        background-color: green;
    }

    .life-amount {
        font-size: 20px;
        margin-top: 5px;
        text-align: right;
    }

    .action {
        font-size: 25px;
        background-color: #675DAB;
        border: solid black;
        border-radius: 15px;
        margin: 5px;
        text-align: center;
    }
</style>
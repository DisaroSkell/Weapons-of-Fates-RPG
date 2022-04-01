<template>
    <div class="enemy-card">
        <div>
            {{ name }}
        </div>
        <div>
            Maximum Health: {{ health }}
        </div>
        <div>
            On death:
                {{ XP }}XP & {{ Gold }}G
        </div>
        <div>
            {{ Strength.namer }}
        </div>
        <div v-if="Resistance">
            Resistance: {{ Resistance.nametw }}
        </div>
        <div v-if="Weekness">
            Weekness: {{ Weekness.nametw }}
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "Enemy-component",
    data() {
        return {
            Strength: 1,
            Resistance: null,
            Weekness: null,
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        health: {
            type: Number,
            required: true
        },
        XP: {
            type: Number,
            required: false
        },
        Gold: {
            type: Number,
            required: false
        },
        StrengthFK: {
            type: Number,
            required: true
        },
        ResistanceFK: {
            type: Number,
            required: false
        },
        WeeknessFK: {
            type: Number,
            required: false
        }
    },
    created() {
        try {
            if (this.StrengthFK) {
                axios({
                    method: 'get',
                    url: 'https://weaponsoffates-api/rarities/' + this.StrengthFK.toString(),
                    reponseType: 'stream'
                }).then((res) => {
                    this.Strength = res.data[0]
                })
            }

            if (this.ResistanceFK) {
                axios({
                    method: 'get',
                    url: 'https://weaponsoffates-api/typesw/' + this.ResistanceFK.toString(),
                    reponseType: 'stream'
                }).then((res) => {
                    this.Resistance = res.data[0]
                })
            }

            if (this.WeeknessFK) {
                axios({
                    method: 'get',
                    url: 'https://weaponsoffates-api/typesw/' + this.WeeknessFK.toString(),
                    reponseType: 'stream'
                }).then((res) => {
                    this.Weekness = res.data[0]
                })
            }
        } catch (err) {
            console.error(err.message)
        }
    },
}
</script>
<style scoped>
    .enemy-card {
        background-color: #8679DB;
        border: solid black;
        border-radius: 15px;
        width: 40%;
        margin: 1% 30%;
        padding: 1%;
        font-size: 3vh;
    }
</style>
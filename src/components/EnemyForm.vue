<template>
    <div class="creationblock">
        <div>Create a new enemy!</div>
        <div v-if="message" class="err-msg" role="alert">{{ message }}</div>
        <div class="infoblock">
            <div>
                Name <br>
                <input class="input" type="text" v-model="name" @keyup.enter="handleRegister"> <br>
            </div>
            <div>
                Health <br>
                <input class="input" type="number" v-model="health" @keyup.enter="handleRegister"> <br>
                <div v-if="isNull(health)" class="err-msg little">
                    Health should not be null!
                </div>
                <div v-if="isNegative(health)" class="err-msg little">
                    Health should not be negative!
                </div>
            </div>
            <div>
                XP on death <br>
                <input class="input" type="number" v-model="xp" @keyup.enter="handleRegister"> <br>
                <div v-if="isNegative(xp)" class="err-msg little">
                    XP should not be negative!
                </div>
            </div>
            <div>
                Gold on death <br>
                <input class="input" type="number" v-model="gold" @keyup.enter="handleRegister"> <br>
                <div v-if="isNegative(gold)" class="err-msg little">
                    Gold should not be negative!
                </div>
            </div>
            <div>
                Strength <br>
                <select v-model="strength">
                    <option disabled value=""> Select a strength </option>
                    <option v-for="rarity in rarities" :key="rarity.idr" :value="rarity.idr">{{ rarity.namer }}</option>
                </select>
            </div>
            <div>
                Resistance <br>
                <select v-model="resistance">
                    <option disabled value=""> Select a weapon type </option>
                    <option v-for="type in weapontypes" :key="type.idt" :value="type.idt">{{ type.nametw }}</option>
                </select>
            </div>
            <div>
                Weekness <br>
                <select v-model="weekness">
                    <option disabled value=""> Select a weapon type </option>
                    <option v-for="type in weapontypes" :key="type.idt" :value="type.idt">{{ type.nametw }}</option>
                </select>
            </div>
            <div class="enterbutton clicker" @click="handleCreation">Create</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default({
    name: "SignUp",
    data() {
        return {
            loading: false,
            message: "",

            rarities: [],
            weapontypes: [],

            name: "",
            health: null,
            xp: null,
            gold: null,
            strength: null,
            resistance: null,
            weekness: null,
        }
    },
    computed: {
        enemy() {
            return {
                name: this.name,
                health: this.health,
                xp: this.xp,
                gold: this.gold,
                strength: this.strength,
                resistance: this.resistance,
                weekness: this.weekness,
            }
        },
        allFilled() { // Other fields are not required
            return !(this.name === "" || this.health === "" || this.strength === "")
            && !(this.name === null || this.health === null || this.strength === null)
        },
    },
    created() {
        try {
            axios({
                method: 'get',
                url: 'https://weaponsoffates-api.herokuapp.com/rarities',
                reponseType: 'stream'
            }).then((res) => {
                this.rarities = res.data
            })

            axios({
                method: 'get',
                url: 'https://weaponsoffates-api.herokuapp.com/typesw',
                reponseType: 'stream'
            }).then((res) => {
                this.weapontypes = res.data
            })
        } catch (err) {
            this.message = err.message
        }
    },
    methods: {
        handleCreation() {
            this.message = ""
            if (!this.allFilled
            || this.isNull(this.health)
            || this.isNegative(this.health)
            || this.isNegative(this.xp)
            || this.isNegative(this.gold)) {
                this.message = "Please fill all the fields correctly."
                return
            }
            this.loading = true

            axios({
                method: 'post',
                url: 'https://weaponsoffates-api.herokuapp.com/enemies',
                data: this.enemy
            }).then( () => {
                this.$router.push("/enemies")
                this.message = "Redirect failed, please go to another page"
            }, (error) => {
                this.loading = false
                try {
                    this.message = error.response.data.message
                } catch (err) {
                    this.message = error.message
                }
            })
        },
        isNull(num) {
            return num === 0
        },
        isNegative(num) {
            return num < 0
        }
    },
})
</script>

<style scoped>
    .creationblock {
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
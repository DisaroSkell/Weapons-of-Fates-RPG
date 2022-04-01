<template>
    <div>
        <div>
            {{ name }}
        </div>
        <div>
            Maximum Health: {{ health }}
        </div>
        <div>
            On death:
            <div>
                XP: {{ XP }}
            </div>
            <div>
                Gold: {{ Gold }}
            </div>
        </div>
        <div>
            {{ Strength }}
        </div>
        <div v-if="Resistance">
            Resistance: {{ Resistance }}
        </div>
        <div v-if="Weekness">
            Weekness: {{ Weekness }}
        </div>
    </div>
</template>
<script>
export default {
    name: "Enemy-component",
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
        Strength: {
            type: Number,
            required: true
        },
        Resistance: {
            type: Number,
            required: false
        },
        Weekness: {
            type: Number,
            required: false
        }
    },
}
</script>

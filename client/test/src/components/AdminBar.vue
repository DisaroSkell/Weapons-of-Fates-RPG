<template>
    <div class="adminbar">
        <div class="adminbar-elem clicker">Abilities</div>
        <div class="adminbar-elem clicker">Enemies</div>
        <div class="adminbar-elem clicker">Fates</div>
        <div class="adminbar-elem clicker">Outfits</div>
        <div class="adminbar-elem clicker">Players</div>
        <div class="adminbar-elem clicker">Rarities</div>
        <div class="adminbar-elem clicker">Weapons types</div>
        <div class="adminbar-elem clicker">Weapons</div>
    </div>
</template>

<style scoped>
    .adminbar {
        position: absolute;
        top: 10.5%;
        width: 100%;
        background-color: #8d88aa;
        border-bottom: solid #3d3957;
        border-width: .5vh;
        height: 5%;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }
    
    .adminbar-elem {
        color: black;
        text-decoration: none;
        height: 100%;
        width: fit-content;
        font-size: 3vh;
        line-height: 200%;
        padding: 0 10px;
        display: inline-block;
    }

    .adminbar-elem:hover {
        background-color: green;
    }
</style>
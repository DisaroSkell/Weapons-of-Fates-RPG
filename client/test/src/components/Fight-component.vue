<template>
    <div>
        <div class="enemy-info">
            <div class="enemy-name">Dragon</div>
            <div class="life-info">
                <div class="life-bar-red"></div>
                <div class="life-amount">100/100</div>
            </div>
        </div>
        <div class="player-info">
            <div class="player-name">Player</div>
            <div class="life-info">
                <div class="life-bar-green"></div>
                <div class="life-amount">100/100</div>
            </div>
        </div>
        <div class="action-menu">
            Chose an action:
            <div class="action">Attack</div>
            <div class="action">Ability1</div>
            <div class="action">Ability2</div>
        </div>
        <div class="dialog">Long text here</div>
    </div>
</template>

<style scoped>
    .enemy-info, .player-info, .action-menu, .dialog {
        font-family: Centurion, sans-serif;
        font-size: 25px;
        border: solid black;
        border-radius: 15px;
        background-color: #504E5C;
        position: absolute;
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
        padding: 15px;
        width: 20%;
        bottom: 1%;
        right: 1%;
    }

    .dialog {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
        width: 75%;
        margin-left: 22%;
        bottom: 1%;
        padding: 15px 0 15px 15px;
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
        font-family: HappySchool;
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
        cursor: pointer;
        user-select: none;
    }
</style>
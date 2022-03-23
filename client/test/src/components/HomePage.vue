<template>
    <div class="navbar">
        <div class="nav-elem">Home</div>
        <div class="nav-elem">Profile</div>
        <router-link to="./fight" class="nav-elem">FOOT</router-link>
        <div class="nav-elem">Bestiary</div>
    </div>
</template>
<script>

</script>

<style scoped>
    .navbar {
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #504E5C;
        padding: 10px 0 10px 0;
        border-bottom: solid #201f27;
        height: 5%;
        text-align: center;
    }

    .nav-elem {
        color: black;
        text-decoration: none;
        font-size: 2vw;
        margin: 5px 10px 5px 10px;
        display: inline;
        cursor: pointer;
        user-select: none;
    }

    .nav-elem:hover {
        background-color: green;
    }
</style>
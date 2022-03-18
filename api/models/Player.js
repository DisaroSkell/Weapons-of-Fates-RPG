const db = require("../db")

function createPlayer(username, email, password, health_max, mana_max) {
    return new Promise((resolve, reject) => {
        const values = [username, email, password, health_max, mana_max]
        const sql = `insert into player (username, email, password, health_maxp, mana_max) values ($1, $2, $3, $4, $5);`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readPlayer(username) {
    return new Promise((resolve, reject) => {
        const values = [username]
        const sql = `select * from player where username = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllPlayers() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from player;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updatePlayer(username, email, password, health_max, mana_max) {
    return new Promise((resolve, reject) => {
        const values = [username, email, password, health_max, mana_max]
        const sql = `update player set email = $2, password = $3, health_maxp = $4, mana_max = $5 where username = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function removePlayer(username) {
    return new Promise((resolve, reject) => {
        const values = [username]
        const sql = `delete from player where username = $1;`
        db.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createPlayer,
    readPlayer,
    readAllPlayers,
    updatePlayer,
    removePlayer
}
const client = require("../db")

function createEnemy(name, health_max) {
    return new Promise((resolve, reject) => {
        const values = [name, health_max]
        const sql = `insert into enemies (namee,healthe_max) values ($1, $2);`
        client.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readEnemy(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from enemies where iden = $1;`
        client.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllEnemies() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from enemies;`
        client.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function updateEnemy(id, name, health_max) {
    return new Promise((resolve, reject) => {
        const values = [id, name, health_max]
        const sql = `update table set namee = $2, healthe_max = $3 where iden = $1;`
        client.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function deleteEnemy(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `delete from enemies where iden = $1;`
        client.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    createEnemy,
    readEnemy,
    readAllEnemies,
    updateEnemy,
    deleteEnemy
}
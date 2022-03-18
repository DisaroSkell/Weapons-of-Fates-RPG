const db = require('../db')

function readRarity(id) {
    return new Promise((resolve, reject) => {
        const values = [id]
        const sql = `select * from rarity where idr = $1;`
        db.query(sql, values, (err, result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

function readAllRarities() {
    return new Promise((resolve, reject) => {
        const values = []
        const sql = `select * from rarity;`
        db.query(sql, values, (err, result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}

module.exports = {
    readRarity,
    readAllRarities
}
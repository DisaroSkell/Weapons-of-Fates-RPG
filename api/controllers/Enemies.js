const model = require("../models/Enemies")

function addEnemy(req, res) {
    const name = req.body.name
    const health = req.body.health
    const promise = model.createEnemy(name,health)
    promise.then((values) => {
        res.status(201).send(values)
    }).catch((err) => {
        console.error(err.message)
        res.status(500).send({
            message: `Cannot create resource`
        })
    })
}

function getAllEnemies(req, res) {
    const promise = model.readAllEnemies()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

module.exports = {
    addEnemy,
    getAllEnemies
}
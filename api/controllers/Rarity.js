const model = require('../models/Rarity')

function getAllRarities(req, res) {
    const promise = model.readAllRarities()
    promise.then((values) => {
        res.status(200).send(values.rows)
    }).catch((err) => {
        console.error(err.message)
        res.status(404).send({
            message: `Cannot find resource`
        })
    })
}

function getRarity(req, res) {
    const id = req.params.id
    
    const promise = model.readRarity(id)
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
    getAllRarities,
    getRarity
}
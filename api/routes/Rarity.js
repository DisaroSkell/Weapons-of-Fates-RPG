module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Rarity')

    router.get('/', controller.getAllRarities)

    router.get('/:id', controller.getRarity)

    app.use('/rarity', router)
}
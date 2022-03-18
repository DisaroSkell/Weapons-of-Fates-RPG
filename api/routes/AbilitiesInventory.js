module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/AbilitiesInventory')

    router.post('/', controller.postAbilityToInventory)

    router.get('/', controller.getPlayerAbilityInventory)

    router.get('/:id', controller.getPlayerAbility)
    
    router.delete('/:id', controller.deleteAbilityFromInventory)

    app.use('/player/:username/abilities', router)
}
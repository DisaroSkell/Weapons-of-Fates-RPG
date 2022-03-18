module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/CanUse')

    router.post('/', controller.postAbilityToEnemy)

    router.get('/', controller.getEnemyAbilityInventory)

    router.get('/:id', controller.getEnemyAbility)

    router.put('/:id', controller.putEnemyAbility)

    router.delete('/:id', controller.deleteAbilityFromUsage)

    app.use('/enemies/:ide/abilities', router)
}
module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/CanUse')

    router.post('/', controller.postAbilityToEnemy)

    router.get('/', controller.getEnemyAbilityInventory)

    router.get('/:ida', controller.getEnemyAbility)

    router.put('/:ida', controller.putEnemyAbility)

    router.delete('/:ida', controller.deleteAbilityFromUsage)

    app.use('/enemies/:ide/abilities', router)
}
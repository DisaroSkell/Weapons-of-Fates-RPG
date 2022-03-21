module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/WeaponsInventory')

    router.post('/', controller.postWeaponToInventory)

    router.get('/', controller.getPlayerWeaponInventory)

    router.get('/:idw', controller.getPlayerWeapon)

    router.put('/:idw', controller.putPlayerWeapon)
    
    router.delete('/:idw', controller.deleteWeaponFromInventory)

    app.use('/players/:username/weapons', router)
}
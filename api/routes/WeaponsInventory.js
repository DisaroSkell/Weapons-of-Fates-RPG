module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/WeaponsInventory')

    router.post('/', controller.postWeaponToInventory)

    router.get('/', controller.getPlayerWeaponInventory)

    router.get('/:id', controller.getPlayerWeapon)

    router.put('/:id', controller.putPlayerWeapon)
    
    router.delete('/:id', controller.deleteWeaponFromInventory)

    app.use('/players/:username/weapons', router)
}
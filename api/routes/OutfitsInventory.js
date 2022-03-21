module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/OutfitsInventory')

    router.post('/', controller.postOutfitToInventory)

    router.get('/', controller.getPlayerOutfitInventory)

    router.get('/:ido', controller.getPlayerOutfit)
    
    router.delete('/:ido', controller.deleteOutfitFromInventory)

    app.use('/players/:username/outfits', router)
}
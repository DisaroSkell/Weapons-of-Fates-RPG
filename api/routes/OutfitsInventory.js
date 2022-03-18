module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/OutfitsInventory')

    router.post('/', controller.postOutfitToInventory)

    router.get('/', controller.getPlayerOutfitInventory)

    router.get('/:id', controller.getPlayerOutfit)
    
    router.delete('/:id', controller.deleteOutfitFromInventory)

    app.use('/player/:username/outfits', router)
}
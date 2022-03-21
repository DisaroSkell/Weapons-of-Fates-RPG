module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Player')

    router.post('/', controller.postPlayer)

    router.get('/', controller.getAllPlayers)

    router.get('/:username', controller.getPlayer)
    
    router.put('/:username', controller.putPlayer)
    
    router.delete('/:username', controller.deletePlayer)

    app.use('/players', router)
}
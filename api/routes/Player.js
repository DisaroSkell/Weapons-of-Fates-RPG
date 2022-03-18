module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Player')

    router.post('/', controller.postPlayer)

    router.get('/', controller.getAllPlayers)

    router.get('/:id', controller.getPlayer)
    
    router.put('/:id', controller.putPlayer)
    
    router.delete('/:id', controller.deletePlayer)

    app.use('/players', router)
}
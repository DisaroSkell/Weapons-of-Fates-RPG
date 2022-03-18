module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Enemies')

    router.post('/', controller.postEnemy)
    
    router.get('/:id', controller.getEnemy)
    
    router.get('/', controller.getAllEnemies)
    
    router.put('/:id', controller.putEnemy)
    
    router.delete('/:id', controller.deleteEnemy)
    
    app.use('/enemies', router)
}
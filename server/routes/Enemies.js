module.exports = app => {
    const router = require('express').Router()
    const controller = require('../controllers/Enemies')

    router.post('/', controller.addEnemy)
    
    router.get('/', controller.getAllEnemies)
    
    app.use('/enemies', router)
}
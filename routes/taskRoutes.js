const express = require('express')
const router = express.Router()
const {getTask,createTask,updateTask,deleteTask} = require('../controllers/taskController')
const authMiddleware = require('../middleware/auth')
router.post('/task',authMiddleware,createTask)
router.get('/task',authMiddleware,getTask)
router.post('/task/update/:id',updateTask)
router.post('/task/delete/:id',deleteTask)

module.exports = router
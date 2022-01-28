const express = require('express')
const router = express.Router()
const studentController = require('../app/controllers/studentController')
const categoriesController = require('../app/controllers/categoriesController')

router.get('/api/students', studentController.list)
router.post('api/students', studentController.create)
router.put('api/students/:id', studentController.edit)
router.delete('api/students/:id', studentController.delete)

router.get('/api/categories', categoriesController.list)

module.exports = router
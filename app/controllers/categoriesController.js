const Category = require('../models/category')

const categoriesController = {}

categoriesController.list = (req, res) => {
    Category.find()
        .then((categories) => {
            res.json(categories)
        })
        .catch((err) => {
            res.json(err.message)
        })
}


module.exports = categoriesController
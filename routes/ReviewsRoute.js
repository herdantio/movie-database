const {Router} = require('express')

const {
    getAllReviews
} = require('../controllers/ReviewsController')

const reviewRouter = Router()

reviewRouter.get('/all', getAllReviews)

module.exports = reviewRouter
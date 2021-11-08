const {Router} = require('express')
const upload = require('../util/multer-storage')

const {
    addReview
} = require('../controllers/ReviewsController')

const reviewRouter = Router()

reviewRouter.post('/add',upload.none(), addReview)

module.exports = reviewRouter
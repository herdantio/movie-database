const {Router} = require('express')

const {
    getAllComments
} = require('../controllers/CommentsController')

const commentRouter = Router()

commentRouter.get('/all', getAllComments)

module.exports = commentRouter
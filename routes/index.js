const {Router} = require('express');
const movieRouter = require('./MoviesRoute')
const commentRouter = require('./CommentsRoute')

const baseRouter = Router()
baseRouter.use('/movies', movieRouter)
baseRouter.use('/comments', commentRouter)

module.exports = baseRouter;

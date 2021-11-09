const {Router} = require('express');
const movieRouter = require('./MoviesRoute')
const reviewRouter = require('./ReviewsRoute')

const baseRouter = Router()
baseRouter.use('/movies', movieRouter)
baseRouter.use('/reviews', reviewRouter)

module.exports = baseRouter;

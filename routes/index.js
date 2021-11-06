const {Router} = require('express');
const movieRouter = require('./MoviesRoute')

const baseRouter = Router()
baseRouter.use('/movies', movieRouter)

module.exports = baseRouter;

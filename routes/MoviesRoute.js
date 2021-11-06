const {Router} = require('express')
const {getAllMovies} = require('../controllers/MoviesController')

const movieRouter = Router()

movieRouter.get('/all', getAllMovies)

module.exports = movieRouter
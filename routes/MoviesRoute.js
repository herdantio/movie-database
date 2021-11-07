const {Router} = require('express')
const {getAllMovies, getOneMovie, addMovie} = require('../controllers/MoviesController')

const movieRouter = Router()

movieRouter.get('/all', getAllMovies)
movieRouter.get('/:movieId', getOneMovie)
movieRouter.post('/add', addMovie)

module.exports = movieRouter
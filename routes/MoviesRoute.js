const {Router} = require('express')
const multer  = require('multer')
const upload = multer({ dest: __dirname + '../public/images' })

const {getAllMovies, getOneMovie, addMovie, deleteOneMovie} = require('../controllers/MoviesController')

const movieRouter = Router()

movieRouter.get('/all', getAllMovies)
movieRouter.get('/:movieId', getOneMovie)
movieRouter.post('/add', upload.none(), addMovie)
movieRouter.delete('/delete', upload.none(), deleteOneMovie)

module.exports = movieRouter
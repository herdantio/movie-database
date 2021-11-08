const {Router} = require('express')
const upload = require('../util/multer-storage')

const {
    getAllMovies,
    getOneMovie,
    addMovie,
    deleteOneMovie,
    updateMoviePicture,
    updateMovieData
} = require('../controllers/MoviesController')

const movieRouter = Router()

movieRouter.get('/all', getAllMovies)
movieRouter.get('/:movieId', getOneMovie)
movieRouter.post('/add', upload.single('moviePicture'), addMovie)
movieRouter.delete('/delete', upload.none(), deleteOneMovie)
movieRouter.put('/update/image', upload.single('moviePicture'), updateMoviePicture)
movieRouter.put('/update/data', upload.none(), updateMovieData)

module.exports = movieRouter
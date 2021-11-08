const db = require('../models/index')

async function getAllMovies(req, res) {
    try {
        let movies = await db['Movie'].findAll()

        return res.status(200).json(movies)
    }catch (e) {
        return res.status(500).json({'err': e.message})
    }
}

async function getOneMovie(req, res) {
    let {movieId} = req.params
    try {
        let movie = await db['Movie'].findOne(
            {
                where: {
                    id: movieId
                }
            }
        )
        return res.status(200).json(movie)
    }catch (e) {
        return res.status(500).json({'err': e.message})
    }

}

async function addMovie(req, res) {
    try {
        let {movieTitle, movieYear, movieSynopsis} = req.body
        let moviePicture = req.file.filename
        let movie = await db['Movie'].create({
            movieTitle,
            movieYear,
            moviePicture,
            movieSynopsis
        })
        return res.status(200).json(movie)
    }catch (e) {
        return res.status(500).json({'err': e.message})
    }
}

async function deleteOneMovie(req, res) {

    try {
        let {movieId} = req.body
        let movie = await db['Movie'].destroy({
            where: {
                id: movieId
            }
        })
        return res.status(200).json(movie)
    }catch (e) {
        return res.status(500).json({'err': e.message})
    }
}

async function updateMoviePicture(req, res) {
    try {
        let {movieId} = req.body
        let moviePicture = req.file.filename

        let movie = db['Movie'].update({moviePicture}, {
            where: {
                id: movieId
            }
        })
        return res.status(200).json(moviePicture)
    }catch (e) {
        return res.status(500).json({'err': e.message})
    }
}

async function updateMovieData(req, res) {
    try {
        let {movieId, movieTitle, movieYear, movieSynopsis} = req.body

        let movie = db['Movie'].update({movieTitle, movieYear, movieSynopsis}, {
            where: {
                id: movieId
            }
        })
        return res.status(200).json(movie)
    }catch (e) {
        return res.status(500).json({'err': e.message})
    }
}
module.exports = {
    getAllMovies,
    getOneMovie,
    addMovie,
    deleteOneMovie,
    updateMoviePicture,
    updateMovieData
}

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
    let {movieData} = req.body
    try {
        let movie = await db['Movie'].create({
            movieTitle: movieData.movieTitle,
            movieYear: movieData.movieYear,
            moviePicture: movieData.moviePicture,
            movieSynopsis: movieData.movieSynopsis
        })
        return res.status(200)
    }catch (e) {
        return res.status(500)
    }
}

module.exports = {
    getAllMovies,
    getOneMovie,
    addMovie
}

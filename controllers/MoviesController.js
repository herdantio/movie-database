const db = require('../models/index')

async function getAllMovies(req, res) {
    try {
        let movies = await db['Movie'].findAll()

        return res.status(200).json(movies)
    }catch (e) {
        console.error(e)
        return res.status(500).json(e)
    }
}
module.exports = {
    getAllMovies
}

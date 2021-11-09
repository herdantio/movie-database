const db = require("../models");

async function addReview(req, res) {

    try {
        let {movieId, reviewName, reviewDesc} = req.body
        let review = await db['Review'].create({
            MovieId: movieId,
            reviewName,
            reviewDesc
        })
        return res.status(200).json(review)
    }catch (e) {
        return res.status(500).json({'err': e.message})
    }
}

module.exports = {
    addReview
}
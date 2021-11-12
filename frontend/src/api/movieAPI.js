import instance from "@/util/axios";

const movieBaseURL = '/movies'

const getAllMovie = () => instance.get(`${movieBaseURL}/all`)

const getOneMovie = (id) => instance.get(`${movieBaseURL}/${id}`)

const updateMoviePicture = (data) => {
    let formData = new FormData()
    formData.append('movieId', data.movieId)
    formData.append('moviePicture', data.moviePicture)
    return instance.put(`${movieBaseURL}/update/image`, data)
}

export default {
    getAllMovie,
    getOneMovie,
    updateMoviePicture
}

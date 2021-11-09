import instance from "@/util/axios";

const movieBaseURL = '/movies'

const getAllMovie = () => instance.get(`${movieBaseURL}/all`)
const getOneMovie = (id) => instance.get(`${movieBaseURL}/${id}`)

export default {
    getAllMovie,
    getOneMovie
}

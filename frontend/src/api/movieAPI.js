import instance from "@/util/axios";

const movieBaseURL = '/movies'

const getAllMovie = () => instance.get(`${movieBaseURL}/all`)

export default {
    getAllMovie
}

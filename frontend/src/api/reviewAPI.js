import instance from "@/util/axios";

const reviewBaseURL = '/reviews'

const postOneReview = (data) => {
    let formData = new FormData()
    formData.append('movieId', data.movieId)
    formData.append('reviewName', data.reviewName)
    formData.append('reviewDesc', data.reviewDesc)
    return instance.post(`${reviewBaseURL}/add`,formData)
}

export default {
    postOneReview
}

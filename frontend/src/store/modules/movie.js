import movieAPI from "@/api/movieAPI";
import reviewAPI from "../../api/reviewAPI";

export default {
    namespaced: true,
    state: {
        movies: [],
        movie: {
            moviePicture: '',
            Reviews: []
        },
        dialogEditMoviePictureVisible: false,
    },
    mutations: {
        getAllMovie(state, movies) {
            state.movies = [...movies]
        },
        getOneMovie(state, movie){
            state.movie = {...movie}
        },
        changeStateDialogEditMoviePictureVisible(state){
            state.dialogEditMoviePictureVisible = true
        },
        changeStateDialogEditMoviePictureNotVisible(state){
            state.dialogEditMoviePictureVisible = false
        }
    },
    actions: {
        async getAllMovie({commit}){
            let res = await movieAPI.getAllMovie()
            commit('getAllMovie', res.data)
        },
        async getOneMovie({commit}, id){
            try {
                let res = await movieAPI.getOneMovie(id)
                commit('getOneMovie', res.data)
            }catch (e) {
                console.log(e)
            }
        },
        async postOneReview({dispatch}, data){
            try {
                let res = await reviewAPI.postOneReview(data)
                dispatch('getOneMovie', data.movieId)
            }catch (e) {
                console.log(e)
            }
        },
        async updateMoviePicture({commit, dispatch}, data){
            try {
                let res = await movieAPI.updateMoviePicture(data)
                dispatch('getOneMovie', data.movieId)
                commit('changeStateDialogEditMoviePictureNotVisible')
            }catch (e) {
                console.log(e)
            }
        }
    }
}
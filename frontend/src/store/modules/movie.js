import movieAPI from "@/api/movieAPI";
import reviewAPI from "../../api/reviewAPI";

export default {
    namespaced: true,
    state: {
        movies: [],
        movie: {
            Reviews: []
        }
    },
    mutations: {
        getAllMovie(state, movies) {
            state.movies = [...movies]
        },
        getOneMovie(state, movie){
            state.movie = {...movie}
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
        }
    }
}
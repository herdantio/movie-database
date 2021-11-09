import movieAPI from "@/api/movieAPI";

export default {
    namespaced: true,
    state: {
        movies: []
    },
    mutations: {
        getAllMovie(state, movies) {
            state.movies = [...movies]
            console.log(state.movies)
        }
    },
    actions: {
        async getAllMovie({commit}){
            let res = await movieAPI.getAllMovie()
            commit('getAllMovie', res.data)
        }
    }
}
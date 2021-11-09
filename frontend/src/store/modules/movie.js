import movieAPI from "@/api/movieAPI";

export default {
    namespaced: true,
    state: {
        movies: [],
        movie: {
            moviePicture: '',
            movieTitle: '',
            movieYear: '',
            movieSynopsis: '',
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
            let res = await movieAPI.getOneMovie(id)
            commit('getOneMovie', res.data)
        }
    }
}
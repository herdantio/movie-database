import movieAPI from "@/api/movieAPI";

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        async getAllMovie(){
            let res = await movieAPI.getAllMovie()
            console.log(res.data)
        }
    }
}
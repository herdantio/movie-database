<template>
    <el-row>
      <el-col v-for="movie in movies" :span="4">
        <movie-card
            :movieTitle="movie.movieTitle"
            :moviePicture="movie.moviePicture"
            :movieYear="movie.movieYear"
            @click="goToMoviePage(movie.id)"
        >
        </movie-card>
      </el-col>
    </el-row>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {mapState} from "vuex";


export default {
  name: "AllMovieDisplay",
  components:{
    MovieCard: defineAsyncComponent(() => import('@/atomic/molecules/MovieCard'))
  },
  computed: {
    ...mapState('movie', {
      movies: state => state.movies
    })
  },
  methods: {
    goToMoviePage(id){
      this.$router.push(`/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
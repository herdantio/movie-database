<template>
    <el-row class="p-40">
      <el-col v-for="movie in movies" :span="4">
        <movie-card
            :movieTitle="movie.movieTitle"
            :moviePicture="movie.moviePicture"
            :movieYear="movie.movieYear"
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
  }
}
</script>

<style scoped>

</style>
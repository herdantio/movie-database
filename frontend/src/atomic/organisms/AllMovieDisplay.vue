<template>
    <el-row>
      <el-col v-for="movie in movies" :span="12">
        <movie-card :movieTitle="movie.movieTitle"></movie-card>
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
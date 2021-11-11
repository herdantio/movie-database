<template>
    <div class="grid grid-cols-12">
      <div v-for="movie in movies" class="col-span-2" :key="movie.id">
        <movie-card
            :movieTitle="movie.movieTitle"
            :moviePicture="movie.moviePicture"
            :movieYear="movie.movieYear"
            @click="goToMoviePage(movie.id)"
        >
        </movie-card>
      </div>
    </div>
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
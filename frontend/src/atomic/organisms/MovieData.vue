<template>
  <el-row>
    <el-col :span="8">
      <el-image
          :src="`http://localhost:3000/images/${movie.moviePicture}`"
      />
    </el-col>
    <el-col :span="16">
      <p class="text-white text-4xl font-bold">{{movie.movieTitle}}</p>
      <p class="text-white text-4xl font-bold">{{movie.movieYear}}</p>
      <p class="text-white text-4xl font-bold">Overview</p>
      <p class="text-white text-4xl">{{movie.movieSynopsis}}</p>
    </el-col>
  </el-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MovieData",
  computed: {
    ...mapState('movie', {
      movie: state => state.movie
    })
  }
}
</script>

<style scoped>

</style>
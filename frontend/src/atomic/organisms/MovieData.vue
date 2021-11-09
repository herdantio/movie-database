<template>
  <el-row>
    <el-col :span="8">
      <el-image
          :src="`http://localhost:3000/images/${movie.moviePicture}`"
      />
    </el-col>
    <el-col :span="16" class="c-w">
      <h1>{{movie.movieTitle}}</h1>
      <h3>{{movie.movieYear}}</h3>
      <h2>Overview</h2>
      <h1>{{movie.movieSynopsis}}</h1>
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
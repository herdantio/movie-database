<template>
  <el-row class="p-15">
    <el-col>
      <el-row>
        <el-image
            :src="`http://localhost:3000/images/${moviePicture}`"
            class="h-300px w-100"
        />
      </el-row>
      <el-row>
        <h2 class="c-w">{{shortenTitle}}</h2>
      </el-row>
      <el-row>
        <h3 class="c-w">{{movieYear}}</h3>
      </el-row>
      </el-col>
  </el-row>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movieTitle: '',
    moviePicture: '',
    movieYear: ''
  },
  computed: {
    shortenTitle(){
      let append = (this.movieTitle.length>9)?'...':''
      return this.movieTitle.substr(0,8) + append
    }
  }
}
</script>

<style scoped>

</style>
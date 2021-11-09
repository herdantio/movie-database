<template>
  <el-row>
    <p style="color: white">{{movieTitle}}</p>
  </el-row>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movieTitle: '',
    moviePicture: '',
    movieYear: ''
  }
}
</script>

<style scoped>

</style>
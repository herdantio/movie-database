<template>
  <div class="m-2 cursor-pointer">
      <el-image
          :src="`http://localhost:3000/images/${moviePicture}`"
          class="h-300px"
      />
      <p class="text-white">{{shortenTitle}}</p>

      <p class="text-white">{{movieYear}}</p>
  </div>
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
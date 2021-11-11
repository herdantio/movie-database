<template>
  <div class="grid grid-cols-12">
    <div class="col-span-4">
      <div>
        <el-image
          :src="`http://localhost:3000/images/${movie.moviePicture}`"
        />
      </div>
      <div>
        <el-button type=text>
          <pencil-alt-icon class="text-white w-10"/>
        </el-button>
      </div>
    </div>
    
    <div class="col-span-8">
      <div>
        <p class="text-white text-4xl font-bold">{{movie.movieTitle}}</p>
        <p class="text-white text-4xl font-bold">{{movie.movieYear}}</p>
        <p class="text-white text-4xl font-bold">Overview</p>
        <p class="text-white text-4xl">{{movie.movieSynopsis}}</p>
      </div>
      <div>
        <el-button type=text>
          <pencil-alt-icon class="text-white w-10"/>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import {mapState} from "vuex";

export default {
  name: "MovieData",
  components: {
    PencilAltIcon: defineAsyncComponent(() => import('@heroicons/vue/outline/PencilAltIcon'))
  },
  computed: {
    ...mapState('movie', {
      movie: state => state.movie
    })
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="grid grid-cols-12">

    <!-- movie poster image -->
    <div class="col-span-4">
      <div v-if="movie.moviePicture != ''">
        <el-image
          :src="`http://localhost:3000/images/${movie.moviePicture}`"
        />
      </div>
      <div v-else>
        <el-empty description="No Image" />
      </div>
      <div>
        <el-button type=text @click="this.changeStateDialogEditMoviePicture">
          <pencil-alt-icon class="text-white w-10"/>
        </el-button>
      </div>
    </div>
    
    <!-- movie data info -->
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

    <!-- dialog edit movie picture -->
    <dialog-edit-movie-picture :isVisible="dialogEditMoviePictureVisible" />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import {mapState, mapMutations} from "vuex";

export default {
  name: "MovieData",
  components: {
    PencilAltIcon: defineAsyncComponent(() => import('@heroicons/vue/outline/PencilAltIcon')),
    DialogEditMoviePicture: defineAsyncComponent(() => import('@/atomic/organisms/DialogEditMoviePicture.vue')),
  },
  computed: {
    ...mapState('movie', {
      movie: state => state.movie,
      dialogEditMoviePictureVisible: state => state.dialogEditMoviePictureVisible,
    })
  },
  methods: {
    ...mapMutations('movie', [
      'changeStateDialogEditMoviePicture'
    ]),
  },
}
</script>

<style scoped>

</style>
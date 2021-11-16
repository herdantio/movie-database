<template>
  <el-dialog
    v-model="isVisible"
    title="Update Movie Poster Picture"
    width="30%"
    @close="this.changeStateDialogEditMoviePictureNotVisible"
  >
    <span>
      <input type="file" @change="handleFileUpload($event)"/>
    </span>
    <template #footer>
      <span>
        <el-button type="primary" @click="submitFile">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {mapMutations, mapActions} from "vuex";

export default {
    name: "DialogEditMoviePicture",
    data(){
      return {
        file: ''
      }
    },
    props: {
      isVisible: false
    },
    methods: {
      ...mapMutations('movie', [
        'changeStateDialogEditMoviePictureNotVisible'
      ]),
      ...mapActions('movie', [
          'updateMoviePicture'
      ]),
      handleFileUpload(event){
        this.file = event.target.files[0]
      },
      submitFile(){
        this.updateMoviePicture({
          movieId: this.$route.params.id,
          moviePicture: this.file
        })
        this.file = ''
      }
    }
}
</script>

<style>

</style>
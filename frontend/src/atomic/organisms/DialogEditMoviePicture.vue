<template>
  <el-dialog
    v-model="isVisible"
    title="Update Movie Poster Picture"
    width="30%"
    @close="this.changeStateDialogEditMoviePicture"
  >
    <span>This is a message</span>
    <template #footer>
      <span>
        <el-button>Cancel</el-button>
        <el-button type="primary">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    name: "DialogEditMoviePicture",
    props: {
      isVisible: false
    },
    methods: {
      ...mapMutations('movie', {
        changeStateDialogEditMoviePicture: 'changeStateDialogEditMoviePicture'
      })
    }
}
</script>

<style>

</style>
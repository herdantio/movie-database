<template>
  <el-row class="text-white bg-purple-600 mb-5 p-5">
    <el-col>
      <p class="text-white font-bold">{{reviewName}}</p>
      <p class="text-white">{{reviewDesc}}</p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "ReviewCard",
  props: {
    reviewName: '',
    reviewDesc: ''
  }
}
</script>

<style scoped>

</style>
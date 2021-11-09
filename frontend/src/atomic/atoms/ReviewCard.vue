<template>
  <el-row class="c-w bg-purple m-10">
    <el-col>
      <h2>{{reviewName}}</h2>
      <h3>{{reviewDesc}}</h3>
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
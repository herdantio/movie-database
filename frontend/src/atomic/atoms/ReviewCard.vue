<template>
  <div class="text-white bg-purple-600 mb-5 p-5 rounded-lg">
    <p class="text-white font-bold">{{reviewName}}</p>
    <p class="text-white">{{reviewDesc}}</p>
  </div>
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
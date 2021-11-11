<template>
  <div class="bg-purple-600 p-2 flex justify-between">
    <div>
      <router-link to="/">
        <p  class="text-black text-3xl">
          Movies
        </p>
      </router-link>
    </div>
    <div>
      <button class="bg-white p-2 rounded-full">ADD MOVIE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBar"
}
</script>

<style scoped>
</style>
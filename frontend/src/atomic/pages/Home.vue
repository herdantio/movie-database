<template>
  <h1>Home Page</h1>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions('movie', [
        'getAllMovie'
    ])
  },
  mounted() {
    this.getAllMovie()
  }
}
</script>

<style scoped>

</style>
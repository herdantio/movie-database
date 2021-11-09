<template>
  <div>
    <all-movie-display/>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {defineAsyncComponent} from "vue";

export default {
  name: "Home",
  components: {
    AllMovieDisplay: defineAsyncComponent(() => import('@/atomic/organisms/AllMovieDisplay'))
  },
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
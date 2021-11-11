<template>
  <div>
    <movie-data class="mb-24"/>
    <movie-review />
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {defineAsyncComponent} from "vue";

export default {
  name: "MoviePage",
  components: {
    MovieData: defineAsyncComponent(() => import('@/atomic/organisms/MovieData')),
    MovieReview: defineAsyncComponent(() => import('@/atomic/organisms/MovieReview'))
  },
  methods: {
    ...mapActions('movie', [
        'getOneMovie'
    ])
  },
  mounted() {
    this.getOneMovie(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
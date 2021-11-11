<template>
  <div class="flex flex-col">
    <div>
      <movie-data class="mb-24"/>
    </div>
    <div>
      <movie-review />
    </div>
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
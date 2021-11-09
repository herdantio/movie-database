<template>
  <div>
    <movie-data/>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {defineAsyncComponent} from "vue";

export default {
  name: "MoviePage",
  components: {
    MovieData: defineAsyncComponent(() => import('@/atomic/organisms/MovieData'))
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
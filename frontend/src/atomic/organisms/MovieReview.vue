<template>
  <div>
        <p class="text-white text-4xl">Reviews</p>

        <!-- review input form -->
        <div class="p-3">
          <p class="text-white text-lg">Name</p>
          
          <div class="grid grid-cols-7 mb-3">
            <el-input v-model="reviewNameInput"/>
          </div>

          <div>
            <el-input class="mb-3" v-model="reviewDescInput"/>
          </div>

          <el-button
              class="bg-purple-600 text-white"
              @click="postReview"
          >
            Post Review
          </el-button>
        </div>

        <!-- list of reviews -->
        <div v-if="isReviews != 0" class="p-3">
          <review-card
              v-for="review in Reviews"
              :reviewName="review.reviewName"
              :reviewDesc="review.reviewDesc"
              :key="review.id"
          />
        </div>
        <div v-else>
          <p class="text-white text-3xl p-3">No Reviews</p>
        </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
import {defineAsyncComponent} from "vue";

export default {
  name: "MovieReview",
  components: {
    ReviewCard: defineAsyncComponent(() => import('@/atomic/atoms/ReviewCard'))
  },
  computed: {
    ...mapState('movie', {
      Reviews: state => state.movie.Reviews,
      isReviews: state => (state.movie.Reviews.length != 0)
    })
  },
  data(){
    return {
      reviewNameInput: '',
      reviewDescInput: ''

    }
  },
  methods: {
    ...mapActions('movie', [
        'postOneReview'
    ]),
    postReview() {
      this.postOneReview({
        movieId: this.$route.params.id,
        reviewName: this.reviewNameInput,
        reviewDesc: this.reviewDescInput
      })
      this.reviewNameInput = ''
      this.reviewDescInput = ''
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <el-row>
      <el-col>
        <h2 class="text-white text-4xl">Reviews</h2>

        <div class="p-3">
          <h3 class="text-white text-lg">Name</h3>
          <el-col :span="10" class="mb-3">
            <el-input v-model="reviewNameInput"/>
          </el-col>
          <el-input class="mb-3" v-model="reviewDescInput"/>
          <el-button
              class="bg-purple-600 text-white"
              @click="postReview"
          >
            Post Review
          </el-button>
        </div>

        <div v-if="isReviews != 0" class="p-3">
          <review-card
              v-for="review in Reviews"
              :reviewName="review.reviewName"
              :reviewDesc="review.reviewDesc"
              :key="review.id"
          />
        </div>
        <p class="text-white text-3xl p-3" v-else>No Reviews</p>
      </el-col>
    </el-row>
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
<template>
  <div>
    <el-row>
      <el-col>
        <h2 class="c-w">Reviews</h2>

        <div>
          <h3 class="c-w m-10">Name</h3>
          <el-col :span="10" class="m-10">
            <el-input v-model="reviewNameInput"/>
          </el-col>
            <el-input v-model="reviewDescInput" class="m-10"/>
          <el-button
              class="bg-purple c-w m-10"
              @click="postReview"
          >
            Post Review
          </el-button>
        </div>


        <review-card
            v-if="isReviews != 0"
            v-for="review in Reviews"
            :reviewName="review.reviewName"
            :reviewDesc="review.reviewDesc"
        />
        <h2 class="c-w" v-else>No Reviews</h2>
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
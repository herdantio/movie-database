<template>
  <div>
    <el-row>
      <el-col>
        <h2 class="c-w">Reviews</h2>

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
import {mapState} from "vuex";
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
  }
}
</script>

<style scoped>

</style>
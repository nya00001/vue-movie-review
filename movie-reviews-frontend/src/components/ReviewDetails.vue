<template>
    <div v-if="review">
      <h1>{{ review.attributes.title }}</h1>
      <p><strong>Rating:</strong> {{ review.attributes.ratings }}</p>
      <p><strong>Director:</strong> {{ review.attributes.director }}</p>
      <p><strong>Date:</strong> {{ new Date(review.attributes.date).toLocaleDateString() }}</p>
      <div v-html="review.attributes.content"></div>
    </div>
  </template>
  
  <script>
  import reviewService from '@/services/reviewService';
  
  export default {
    data() {
      return {
        review: null
      };
    },
    created() {
      const reviewId = this.$route.params.id;
      reviewService.getReview(reviewId).then(response => {
        this.review = response.data.data;
      });
    }
  };
  </script>
  
<template>
    <div>
      <h1>Movie Reviews</h1>
      <input v-model="searchQuery" placeholder="Search reviews..." />
      <ul>
        <li v-for="review in filteredReviews" :key="review.id">
          <router-link :to="{ name: 'ReviewDetails', params: { id: review.id } }">
            {{ review.attributes.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import reviewService from '@/services/reviewService';
  
  export default {
    data() {
      return {
        reviews: [],
        searchQuery: ''
      };
    },
    computed: {
      filteredReviews() {
        return this.reviews.filter(review => 
          review.attributes.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    created() {
      reviewService.getReviews().then(response => {
        this.reviews = response.data.data;
      });
    }
  };
  </script>
  
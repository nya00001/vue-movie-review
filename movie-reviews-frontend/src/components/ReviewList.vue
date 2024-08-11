<template>
    <div class="container">
      <h1 class="title">Movie Reviews</h1>
      
      <div class="search-bar">
        <input type="text" placeholder="Search reviews..." v-model="searchQuery" />
      </div>
  
      <div class="cards">
        <div
          v-for="(review, index) in filteredReviews"
          :key="review.id"
          :class="['card', getColorClass(index)]"
          @click="goToReviewDetails(review.id)"
        >
          <h2>{{ review.attributes.title }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import reviewService from '@/services/reviewService';
  
  export default {
    data() {
      return {
        reviews: [],
        searchQuery: '',
      };
    },
    computed: {
      filteredReviews() {
        return this.reviews.filter(review =>
          review.attributes.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      getColorClass(index) {
        const colors = [
          'card-blue', 'card-red', 'card-green', 'card-yellow', 'card-purple',
          'card-orange', 'card-teal', 'card-pink', 'card-brown', 'card-gray'
        ];
        return colors[index % colors.length];
      },
      goToReviewDetails(id) {
        this.$router.push({ name: 'ReviewDetails', params: { id } });
      },
    },
    created() {
      reviewService.getReviews().then(response => {
        this.reviews = response.data.data;
      }).catch(error => {
        console.error("Error fetching reviews:", error);
      });
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap'); /* Movie-themed font */
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    font-family: 'Cinzel', serif; 
  }
  
  .title {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .search-bar input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 1.2em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    width: 200px;
    padding: 20px;
    border-radius: 10px;
    color: white;
    text-align: left;
    cursor: pointer;
  }
  
  .card h2 {
    margin-top: 0;
    font-size: 1.5em;
  }
  
  .card-blue { background-color: #3498db; }
  .card-red { background-color: #e74c3c; }
  .card-green { background-color: #2ecc71; }
  .card-yellow { background-color: #f1c40f; }
  .card-purple { background-color: #9b59b6; }
  .card-orange { background-color: #e67e22; }
  .card-teal { background-color: #1abc9c; }
  .card-pink { background-color: #ff69b4; }
  .card-brown { background-color: #8b4513; }
  .card-gray { background-color: #7f8c8d; }
  </style>
  
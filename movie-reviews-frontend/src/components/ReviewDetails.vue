<template>
  <div class="container">
    <div v-if="review" :class="['review-card', randomColorClass]">
      <h1>{{ review.attributes.title }}</h1>
      <p><strong>Rating:</strong> {{ review.attributes.ratings }}</p>
      <p><strong>Director:</strong> {{ review.attributes.director }}</p>
      <p><strong>Release Date:</strong> {{ review.attributes.date }}</p>
      <p>{{ review.attributes.content }}</p>
    </div>
    <button @click="goBack" class="back-button">Back to Home</button>
  </div>
</template>

<script>
import reviewService from '@/services/reviewService';

export default {
  data() {
    return {
      review: null,
      randomColorClass: ''
    };
  },
  methods: {
    fetchReview() {
      const id = this.$route.params.id;
      reviewService.getReview(id).then(response => {
        this.review = response.data.data;
        this.randomColorClass = this.getRandomColorClass();
      }).catch(error => {
        console.error("Error fetching review:", error);
      });
    },
    goBack() {
      this.$router.push({ name: 'ReviewList' });
    },
    getRandomColorClass() {
      const colors = [
        'card-blue', 'card-red', 'card-green', 'card-yellow', 'card-purple',
        'card-orange', 'card-teal', 'card-pink', 'card-brown', 'card-gray'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  },
  created() {
    this.fetchReview();
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

.review-card {
  padding: 30px;
  border-radius: 10px;
  color: white;
  text-align: left;
}

.review-card h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.review-card p {
  margin: 10px 0;
  font-size: 1.2em;
}

.back-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;
  font-family: 'Cinzel', serif; 
}

.back-button:hover {
  background-color: #555;
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

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:1337/api', 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getReviews() {
    return apiClient.get('/reviews');
  },
  getReview(id) {
    return apiClient.get(`/reviews/${id}`);
  },
};

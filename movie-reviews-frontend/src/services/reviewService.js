import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://deserving-egg-9a8da5f25f.strapiapp.com/api', 
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

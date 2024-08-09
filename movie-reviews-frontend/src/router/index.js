import { createRouter, createWebHistory } from 'vue-router';
import ReviewList from '@/components/ReviewList.vue';
import ReviewDetails from '@/components/ReviewDetails.vue';

const routes = [
  {
    path: '/',
    name: 'ReviewList',
    component: ReviewList,
  },
  {
    path: '/review/:id',
    name: 'ReviewDetails',
    component: ReviewDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

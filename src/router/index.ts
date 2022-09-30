import { createRouter, createWebHistory } from 'vue-router';
import { generateRequest, request } from '../services/axiosService';
import { useMainStore } from '../stores/store';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  const mainStore = useMainStore();
  const setCurrencies = mainStore.setCurrencies;
  if (to.path === '/') {
    // On the homepage a list of currencies is required before the page can be loaded
    // Generate reequest for list of currencies:
    const requestGet = generateRequest('get', '/currencies.json', {
      show_alternative: false,
      show_inactive: false,
    });
    // After request for list of currencies completes, reorganize and store the result:
    await request(requestGet).then((response) => {
      setCurrencies(
        Object.entries(response.data).map((curr) => {
          return {
            code: curr[0],
            name: curr[1] as string,
          };
        })
      );
    });
  }
  // explicitly return false to cancel navigation
  // return false;
});

export default router;

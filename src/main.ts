import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router';
// Create teh vue app and pinia store
const app = createApp(App);
const pinia = createPinia();
// Attach pinia store and router to the Vue app
app.use(pinia);
app.use(router);

app.mount('#app');

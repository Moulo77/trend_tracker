// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import VideoDetails from './components/VideoDetails.vue';
import ThemesVue from './components/Themes.vue';

const routes = [
  { path: '/videos/:videoId', component: VideoDetails },
  { path: '/', component: ThemesVue}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router); 
app.mount('#app');

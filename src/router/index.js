import { createRouter, createWebHistory } from 'vue-router'
import IndexDesktop from "@/views/IndexDesktop.vue";
import IndexMobile from "@/views/IndexMobile.vue";

// Функция для определения мобильного устройства
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPod|iPad/i.test(navigator.userAgent);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: isMobileDevice() ? IndexMobile : IndexDesktop // Условный выбор компонента
    },
  ]
})

export default router
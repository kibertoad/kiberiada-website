// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/modules/home/HomeView.vue'),
  },
  {
    path: '/code-roaster',
    component: () => import('@/modules/code-roaster/CodeRoasterView.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/atomic/pages/Home')
  },
  {
    path: '/:id',
    name: 'MoviePage',
    component: () => import('@/atomic/pages/MoviePage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

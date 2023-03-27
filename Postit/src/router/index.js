import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Detail from '../Notes/PostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IndexView from '../views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: IndexView
    // component: () => import('../views/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__?'/vue3-webpack-app':process.env.BASE_URL),
  routes
})

export default router

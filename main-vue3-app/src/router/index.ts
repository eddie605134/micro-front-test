import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/vue2-webpack-app/:chapters*',
    name: 'vue2-webpack-app',
    component: () => import('../views/Vue2App.vue')
  },
  {
    path: '/vue3-vite-app/:chapters*',
    name: 'vue3-vite-app',
    component: () => import('../views/ViteApp.vue')
  },
  {
    path: '/vue3-webpack-app/:chapters*',
    name: 'vue3-webpack-app',
    component: () => import('../views/Vue3App.vue')
  },
  {
    path: '/react-webpack-app/:chapters*',
    name: 'react-webpack-app',
    component: () => import('../views/ReactWebpack.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

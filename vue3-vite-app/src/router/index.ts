import { createRouter, createWebHistory } from 'vue-router'
import {

  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper';

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/vue3-vite-app' : '/'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
    }
  ]
})

export default router

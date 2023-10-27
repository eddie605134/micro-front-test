import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexVue from '../views/Index.vue'

Vue.use(VueRouter)

const routes= [
  {
    path: '/',
    name: 'index',
    component: IndexVue
    // component: () => import( '@/views/Index.vue')

  },
]
console.log(window.__POWERED_BY_QIANKUN__)
const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/vue2-webpack-app' : '/',
  routes
})

export default router

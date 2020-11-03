import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/seach',//搜索页面
    name: 'Seach',
    component: () => import('../views/Seach.vue')
  },
  {
    path: '/welfare',//每日福利
    name: 'Welfare',
    component: () => import('../views/Welfare.vue')
  },
  {
    path: '/my',//我参与的
    name: 'My',
    component: () => import('../views/My.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

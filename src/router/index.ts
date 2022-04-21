/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-07 18:24:23
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-19 14:13:46
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home.vue'),
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/pages/index.vue'),
  },
  {
    path: '/ref-reactive',
    name: 'RefReactive',
    meta: {
      title: 'compotions api',
    },
    component: () => import('@/views/pages/ref-reactive.vue'),
  },
  {
    path: '/use-pinia',
    name: 'UsePinia',
    meta: {
      title: '使用pinia',
    },
    component: () => import('@/views/pages/use-pinia.vue'),
  },
]

const route = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default route

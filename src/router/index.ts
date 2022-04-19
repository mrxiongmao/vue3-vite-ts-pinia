/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-07 18:24:23
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-18 15:26:35
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
]

const route = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default route

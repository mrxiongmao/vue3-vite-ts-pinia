/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-21 16:03:15
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-21 16:05:41
 */
/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-21 14:50:25
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-21 14:53:05
 */

import { RouteRecordRaw } from 'vue-router'

const publicRoutes: Array<RouteRecordRaw> = [
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
    },
    component: () => import('@/views/pages/index.vue'),
  },
]

export default publicRoutes

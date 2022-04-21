/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-21 16:06:36
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-21 16:08:01
 */
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

const exampleRoutes: Array<RouteRecordRaw> = [
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
  {
    path: '/provide-inject',
    name: 'Provide',
    meta: {
      title: 'Provide & project',
    },
    component: () => import('@/views/pages/provide-inject/index.vue'),
  },
]

export default exampleRoutes

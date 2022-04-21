/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-07 18:24:23
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-21 16:08:28
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import publicRoutes from './public'
import exampleRoutes from './example'

const routes: Array<RouteRecordRaw> = [...publicRoutes, ...exampleRoutes]

const route = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default route

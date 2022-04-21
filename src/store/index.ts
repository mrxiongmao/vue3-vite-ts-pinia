/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-14 17:07:18
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-21 10:08:30
 */

import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

export default store

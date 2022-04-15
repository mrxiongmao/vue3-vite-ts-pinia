/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-07 15:58:35
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-15 09:37:51
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/element/index.scss'
import App from './App.vue'
import store from '@/store/index'
import router from '@/router/index'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')

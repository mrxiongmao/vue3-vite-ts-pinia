/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-14 17:24:26
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-21 10:04:27
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
    login<T>(account: T, pwd: T) {
      console.log(account, pwd, '?')
    },
  },
  getters: {
    fullName: (state) => {
      return state.name + '哈哈哈'
    },
  },
})

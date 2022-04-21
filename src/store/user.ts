/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-14 17:24:26
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-21 10:15:31
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
      age: 18,
      sex: '男',
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
  // 开启数据缓存
  persist: {
    enabled: true,
    // 改变存储key和位置，默认存在session Storage
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
        paths: ['name', 'age'], // 可指定持久化字段，不指定则全部储存
      },
    ],
  },
})

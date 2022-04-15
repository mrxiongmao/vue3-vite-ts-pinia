/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-14 17:24:26
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-14 17:29:44
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
  },
})

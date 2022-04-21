<!--
 * @Author: yuxiong.zhang
 * @Date: 2022-04-14 17:26:02
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-20 18:14:37
-->

<template>
  <div>{{ userStore.name }}</div>
</template>

<script lang="ts" setup>
// import { useUserStore } from '../store/user'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
userStore.updateName('张三 -> 李四')
let info = {
  account: 'zzz',
  pwd: 111,
}
userStore.login<string | number>(info.account, info.pwd)
</script>

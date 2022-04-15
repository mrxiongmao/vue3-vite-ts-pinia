<!--
 * @Author: yuxiong.zhang
 * @Date: 2022-04-14 17:26:02
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-15 11:40:23
-->

<template>
  <div>{{ userStore.name }}</div>
</template>

<script lang="ts" setup>
// import { useUserStore } from '../store/user'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
userStore.updateName('张三 -> 李四1')
</script>

<!--
 * @Author: yuxiong.zhang
 * @Date: 2022-04-18 10:43:56
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-18 11:06:42
-->

<template>
  <div>{{ name }}</div>
  <el-button @click="change">改名</el-button>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['updateName'])
const change = () => {
  emit('updateName', 'jack')
}
</script>

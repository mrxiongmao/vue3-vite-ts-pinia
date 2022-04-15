<!--
 * @Author: yuxiong.zhang
 * @Date: 2022-04-07 15:58:35
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-14 17:47:31
-->
<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

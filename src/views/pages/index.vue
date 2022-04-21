<!--
 * @Author: yuxiong.zhang
 * @Date: 2022-04-14 17:36:32
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-19 14:11:41
-->

<template>
  <div>index</div>
  <UsePinia class="gap" />
  <Child :name="state.name" @update-name="updateName" />
</template>

<script lang="ts" setup>
import UsePinia from '@/components/UsePinia.vue'
import Child from '@/components/TestComponents.vue'
import { reactive } from 'vue'

// emit
const state = reactive({
  name: 'Jerry',
  // name, 如果是name，则所有的name都会被响应监听
})
const updateName = (name: string) => {
  state.name = name
}
</script>

<style lang="scss" scoped>
.gap {
  margin: 10px 0;
}
</style>

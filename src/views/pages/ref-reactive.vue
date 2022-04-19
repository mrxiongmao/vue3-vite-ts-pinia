<!--
 * @Author: yuxiong.zhang
 * @Date: 2022-04-18 15:21:24
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-18 15:24:59
-->

<template>
  <div class="title">ref reactive toRef toRefs</div>
  <div>ref：{{ age }}</div>
  <div>toRef：{{ objRef }}</div>
  <div>toRefs：{{ refsNewObj.age }}</div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRef, toRefs } from 'vue'

// ref 针对基本数据类型生成响应数据 (string, number,...)
// reactive 针对对象，数组生成响应数据
// toRef 可以响应对象 Object ，其针对的是某一个响应式对象（ reactive 封装）的属性prop ，toRef 如果用于普通对象（非响应式对象），产出的结果不具备响应式
// toRefs 是针对整个对象的所有属性，目标在于将响应式对象（ reactive 封装）转换为普通对象,普通对象里的每一个属性 prop 都对应一个 ref, 且与原来的objec保持引用关系

// ref  针对基本数据类型生成响应数据 (string, number, boolean...)
const age = ref<string | number>('18')
age.value = 33

// toRef
const obj = reactive({
  sexy: '男',
  since: 'china',
})
const objRef = toRef(obj, 'sexy')
setTimeout(() => {
  objRef.value = '女'
}, 3000)

// toRefs
const newObj = reactive({
  name: '张三',
  age: 33,
})
const refsNewObj = toRefs(newObj)
setTimeout(() => {
  refsNewObj.age.value = 20
}, 3000)
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}
</style>

/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-08 15:38:42
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-18 10:56:49
 */
module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  rules: {
    // override/add rules settings here, such as:
  },
}

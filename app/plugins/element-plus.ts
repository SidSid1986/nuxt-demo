/*
 * @Author: Sid Li
 * @Date: 2025-10-25 09:27:34
 * @LastEditors: Sid Li
 * @LastEditTime: 2025-10-25 10:42:11
 * @FilePath: \nuxt-demo\app\plugins\element-plus.ts
 * @Description: 
 */
import { ID_INJECTION_KEY } from 'element-plus'
import type { App } from 'vue'
// 引入 Nuxt 提供的插件定义函数
import { defineNuxtPlugin } from 'nuxt/app'

// 用 defineNuxtPlugin 包裹插件逻辑
export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp 包含 app（Vue 实例）等核心对象
  const app: App = nuxtApp.vueApp

  // 原有的 provide 逻辑不变
  app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0
  })
})
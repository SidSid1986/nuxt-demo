<!--
 * @Author: Sid Li
 * @Date: 2025-10-24 10:04:15
 * @LastEditors: Sid Li
 * @LastEditTime: 2025-10-24 10:04:21
 * @FilePath: \nuxt-simple-demo\app\components\Navbar.vue
 * @Description: 
-->
<!-- app/components/Navbar.vue -->
<template>
  <!-- 简单导航栏：包含「首页」和「关于」链接 -->
  <nav style="padding: 20px; background: #f5f5f5; margin-bottom: 30px;">
    <!-- NuxtLink：Nuxt 内置路由组件（替代原生 <a> 标签，无刷新跳转） -->
    <NuxtLink to="/" style="margin-right: 20px; font-weight: bold;">
      首页
    </NuxtLink>
    <NuxtLink to="/user/1" style="margin-right: 20px;">
      查看用户 1 详情
    </NuxtLink>
    <NuxtLink to="/user/2">
      查看用户 2 详情
    </NuxtLink>
  </nav>
</template>
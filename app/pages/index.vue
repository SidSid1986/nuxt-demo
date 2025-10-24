<!--
 * @Author: Sid Li
 * @Date: 2025-10-24 10:04:40
 * @LastEditors: Sid Li
 * @LastEditTime: 2025-10-24 10:04:46
 * @FilePath: \nuxt-simple-demo\app\pages\index.vue
 * @Description: 
-->
<!-- app/pages/index.vue -->
<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 0 20px;">
    <!-- 引入导航栏组件 -->
    <Navbar />

    <!-- 首页内容 -->
    <h1 style="color: #2c3e50;">Nuxt 3 极简 Demo</h1>
    <p>这是一个新手友好的 Nuxt 入门示例，包含以下功能：</p>
    <ul style="line-height: 2;">
      <li>✅ 导航栏组件复用</li>
      <li>✅ 静态数据展示（如下方个人信息）</li>
      <li>✅ 动态路由跳转（点击用户列表）</li>
    </ul>

    <!-- 静态数据展示 -->
    <div style="margin-top: 30px; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
      <h3>个人信息（静态数据）</h3>
      <!-- 加载 public 文件夹下的图片 -->
      <img src="/avatar.jpg" alt="头像" style="width: 150px; border-radius: 50%;" />
      <p>姓名：Nuxt 新手</p>
      <p>学习目标：掌握 Nuxt 基础路由和组件</p>
    </div>

    <!-- 动态路由跳转入口：点击跳转到对应用户的详情页 -->
    <div style="margin-top: 30px;">
      <h3>用户列表（点击查看详情）</h3>
      <div 
        v-for="user in userList" 
        :key="user.id"
        style="margin: 10px 0; padding: 10px; border: 1px solid #ddd; cursor: pointer;"
        @click="goToUserDetail(user.id)"
      >
        用户名：{{ user.name }} → 点击查看 ID: {{ user.id }} 的详情
      </div>
    </div>
  </div>
</template>

<script setup>
// 1. 引入导航栏组件（Nuxt 3 自动导入，无需手动 import，但写了也不报错）
import Navbar from '@/components/Navbar.vue'

// 2. 引入 Nuxt 内置的路由跳转工具（类似 Vue Router 的 useRouter）
const router = useRouter()

// 3. 静态数据（模拟后端返回的用户列表）
const userList = [
  { id: 1, name: "张三", age: 25, job: "前端开发" },
  { id: 2, name: "李四", age: 28, job: "后端开发" }
]

// 4. 点击跳转函数：跳转到动态路由 /user/[id]
const goToUserDetail = (userId) => {
  router.push(`/user/${userId}`)
}
</script>
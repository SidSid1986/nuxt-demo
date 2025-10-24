<!--
 * @Author: Sid Li
 * @Date: 2025-10-24 10:05:17
 * @LastEditors: Sid Li
 * @LastEditTime: 2025-10-24 10:08:35
 * @FilePath: \nuxt-simple-demo\app\pages\user\[id].vue
 * @Description: 
-->
<!-- app/pages/user/[id].vue -->
<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 0 20px">
    <!-- 复用导航栏组件 -->
    <Navbar />

    <!-- 动态详情内容 -->
    <h1 style="color: #2c3e50">用户详情页（ID: {{ userId }}）</h1>

    <!-- 加载状态：数据未获取到时显示 -->
    <div v-if="isLoading">加载中...</div>

    <!-- 数据展示：获取到用户信息后显示 -->
    <div
      v-else
      style="
        margin-top: 20px;
        border: 1px solid #eee;
        padding: 20px;
        border-radius: 8px;
      "
    >
      <p>ID：{{ user.id }}</p>
      <p>姓名：{{ user.name }}</p>
      <p>年龄：{{ user.age }}</p>
      <p>职业：{{ user.job }}</p>
      <!-- 返回首页按钮 -->
      <button
        style="
          margin-top: 20px;
          padding: 8px 16px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        "
        @click="router.back()"
      >
        返回首页
      </button>
    </div>
  </div>
</template>

<script setup>
// 1. 引入导航栏组件
import Navbar from "@/components/Navbar.vue";

// 2. 引入路由工具（获取动态参数 + 跳转）
const router = useRouter();
const route = useRoute();

// 3. 获取动态路由参数：从 URL 中提取 [id]（如 /user/1 中的 1）
const userId = route.params.id; // params.id 对应文件名 [id]

// 4. 模拟「从后端获取用户详情」的异步操作
const { data: user, isLoading } = await useAsyncData(
  // 缓存键（确保数据不重复请求，建议包含参数，如 `user-${userId}`）
  `user-${userId}`,
  // 异步函数：模拟接口请求（1 秒后返回数据，模拟网络延迟）
  async () => {
    // 实际项目中这里会用 axios/fetch 调用后端接口，比如：
    // const res = await fetch(`/api/user/${userId}`)
    // return res.json()

    // 这里用 setTimeout 模拟异步请求
    return new Promise((resolve) => {
      setTimeout(() => {
        // 模拟根据 ID 返回不同用户数据
        const userData = [
          { id: 1, name: "张三", age: 25, job: "前端开发" },
          { id: 2, name: "李四", age: 28, job: "后端开发" },
        ].find((item) => item.id === Number(userId)); // 注意：params.id 是字符串，需转数字

        resolve(userData);
      }, 1000);
    });
  }
);
</script>

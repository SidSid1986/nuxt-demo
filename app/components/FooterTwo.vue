<!--
 * @Author: Sid Li
 * @Date: 2026-02-28 15:12:20
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-28 15:49:32
 * @FilePath: \nuxt-free\app\components\FooterTwo.vue
 * @Description: 
-->
<template>
  <div class="footer-two-container">
    <div class="footer-two-tab" v-for="item in footerTab" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const footerTab = ref([
  {
    id: 1,
    name: "首页",
  },
  {
    id: 2,
    name: "产品中心",
  },
  {
    id: 3,
    name: "解决方案",
  },
  {
    id: 4,
    name: "服务支持",
  },
  {
    id: 5,
    name: "联系我们",
  },
]);

onMounted(() => {
  console.log("组件挂载了");
});
</script>

<style scoped>
.footer-two-container {
  width: 100%;
  height: 10vh;
  border: 4px solid red;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;
  .footer-two-tab {
    margin: 0 10px;
    color: #666666;
    cursor: pointer;
  }
}
</style>

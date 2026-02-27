<!--
 * @Author: Sid Li
 * @Date: 2025-10-24 10:04:15
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-27 11:02:01
 * @FilePath: \nuxt-free\app\components\Navbar.vue
 * @Description: 
-->
<!-- app/components/Navbar.vue -->
<template>
  <div class="nav-container">
    <div class="nav-logo">
      <img src="/logo.png" alt="logo" />
      <div class="nav-logo-text">
        <span class="company-name">烟台阜瑞智能装备有限公司</span>
        <span class="company-tag">YANTAI FREE INTELEGENT EQUIPMENT LTD</span>
      </div>
    </div>

    <div class="link-text-content">
      <NuxtLink
        v-for="(item, index) in tabList"
        :key="item.name"
        class="link-text"
        :to="item.link"
        @click="handleClick(index, item)"
      >
        <span :class="{ active: activeIndex === index }"> {{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const tabList = [
  {
    name: "首页",
    link: "/",
  },
  {
    name: "产品中心",
    link: "/",
  },
  {
    name: "新闻中心",
    link: "/",
  },
  {
    name: "服务支持",
    link: "/",
  },
  {
    name: "解决方案",
    link: "/",
  },
  {
    name: "联系我们",
    link: "/",
  },
  {
    name: "资料下载",
    link: "/",
  },
];

const activeIndex = ref(0);

const handleClick = (index, item) => {
  activeIndex.value = index;
  console.log(item.name);
};
</script>

<style scoped lang="scss">
.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid red;
  box-sizing: border-box;
  height: 10vh;

  .nav-logo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 50px;
    width: 45%;
    border: 1px solid green;
    height: 100%;
    img {
      width: 160px;
      height: 100%;
      border: 1px solid red;
    }
    .nav-logo-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding-left: 5px;
      .company-name {
        font-size: 30px;
        font-family: "隶书", serif;
        width: 380px;
        border: 2px solid blue;
        text-align-last: justify;
      }
      .company-tag {
        font-size: 16px;
        font-family: Arial;
        width: 380px;
        border: 2px solid blue;
        text-align-last: justify;
      }
    }
  }

  .link-text-content {
    width: 55%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .link-text {
      width:80px;
      background-color: red;
      text-align: center;
      margin-right: 20px;
      font-size: 16px;
      font-family: "微软雅黑", serif;
    }
    border: 1px solid green;
  }
}
.active {
  color: blue;
}
</style>

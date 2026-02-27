<!--
 * @Author: Sid Li
 * @Date: 2025-10-24 10:04:40
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-27 16:13:33
 * @FilePath: \nuxt-free\app\pages\index.vue
 * @Description: 
-->
<!-- app/pages/index.vue -->
<template>
  <div class="index-container">
    <div class="nav-container">
      <Navbar />
    </div>
    <div class="carousel-container">
      <IndexSwiper
        ref="treatSwiperRef"
        :swiperData="swiperData"
        :activeIndex="testIndex"
      />
    </div>

    <div class="main-business">
      <MainBusiness />
    </div>

    <div class="main-product">
      <MainProduct />
    </div>

    <div class="main-demo">
      <Demo />
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import IndexSwiper from "@/components/IndexSwiper.vue";
import MainBusiness from "@/components/MainBusiness.vue";
import MainProduct from "@/components/MainProduct.vue";
import Demo from "@/components/Demo.vue";

const router = useRouter();

const swiperData = ref([
  { id: 1, url: "/images/1.png" },
  { id: 2, url: "/images/2.png" },
  { id: 3, url: "/images/3.png" },
]);

const testIndex = ref(-1);
</script>
<style scoped lang="scss">
.index-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .nav-container {
  }
  .carousel-container {
    height: 75vh;
    border: 1px solid red;
    margin-top: 2vh;
  }
  .main-business {
    width: 65%;
  }

  .main-product {
    width: 65%;
  }

  .main-demo {
    width: 70%;
  }
}
</style>
<style>
/* 1. 移除 body 和 html 的默认边距 */
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* 防止出现横向滚动条 */
  overflow-x: hidden;
}

/* 2. 简单的 Reset (类似 normalize) */
/* 移除所有元素的默认盒模型计算差异 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 移除常用标签的默认上下边距 */
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
dl,
dd,
figure,
blockquote {
  margin: 0;
  padding: 0;
}

/* 移除列表样式 */
ul,
ol {
  list-style: none;
}

/* 移除图片默认的下边距 */
img {
  display: block;
  max-width: 100%;
}

/* 移除链接默认颜色和下划线 */
a {
  text-decoration: none;
  color: inherit;
}
</style>

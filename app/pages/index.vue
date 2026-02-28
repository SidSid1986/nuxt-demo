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

    <div class="about">
      <About />
    </div>

    <div class="news">
      <News />
    </div>

    <div class="footer-one">
      <FooterOne />
    </div>

    <div class="footer-two">
      <FooterTwo />
    </div>

    <!-- 回到顶部按钮 -->
    <div class="back-to-top" :class="{ show: isShowBackTop }" @click="scrollToTop">
      <span class="arrow">回到顶部</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from "vue";
import Navbar from "@/components/Navbar.vue";
import IndexSwiper from "@/components/IndexSwiper.vue";
import MainBusiness from "@/components/MainBusiness.vue";
import MainProduct from "@/components/MainProduct.vue";
import Demo from "@/components/Demo.vue";
import About from "@/components/About.vue";
import News from "@/components/News.vue";
import FooterOne from "@/components/FooterOne.vue";
import FooterTwo from "@/components/FooterTwo.vue";

const router = useRouter();

// 轮播数据
const swiperData = ref([]);
const testIndex = ref(-1);

// 回到顶部按钮核心逻辑
const isShowBackTop = ref(false);
const scrollThreshold = 300; // 300px触发
let scrollHandler = null; // 保存事件处理函数引用，方便移除

// 滚动监听核心函数（抽离出来，确保引用一致）
const handleScroll = () => {
  // 强制刷新计算，兼容所有场景
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log("实时滚动距离：", scrollTop); // 实时打印，确认是否监听到
  isShowBackTop.value = scrollTop > scrollThreshold;
};

// 点击回到顶部
const scrollToTop = () => {
  // 强制回到顶部（兼容Nuxt的路由模式）
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // 立即隐藏按钮
  isShowBackTop.value = false;
};

onMounted(async () => {
  await nextTick();
  swiperData.value = [
    { id: 1, url: "/images/1.png" },
    { id: 2, url: "/images/2.png" },
    { id: 3, url: "/images/3.png" },
  ];

  // 关键修复1：用捕获模式绑定事件，优先级更高
  scrollHandler = handleScroll; // 保存引用
  window.addEventListener("scroll", scrollHandler, {
    capture: true, // 捕获阶段触发，避免被其他事件阻止
    passive: true, // 提升性能，避免滚动卡顿
  });

  // 初始触发一次
  handleScroll();
});

// 关键修复2：Nuxt页面激活/失活时重新绑定/移除（适配路由缓存）
onActivated(() => {
  if (!scrollHandler) scrollHandler = handleScroll;
  window.addEventListener("scroll", scrollHandler, { capture: true, passive: true });
});

onDeactivated(() => {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler, { capture: true });
  }
});

// 组件卸载时移除
onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler, { capture: true });
    scrollHandler = null; // 清空引用
  }
});
</script>

<style scoped lang="scss">
// 核心：确保页面能滚动
.index-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // 必须是flex-start，否则无滚动条
  align-items: center;
  width: 100%;
  min-height: 100vh;
  // 新增：确保容器不会限制内容高度
  height: auto;

  .nav-container {
    width: 100%;
  }

  .carousel-container {
    height: 75vh;
    width: 100%;
    border: 1px solid red;
    margin-top: 2vh;
  }

  .main-business {
    width: 65%;
    margin: 2vh 0;
  }

  .main-product {
    width: 65%;
    margin: 2vh 0;
  }

  .main-demo {
    width: 70%;
    margin: 2vh 0;
  }

  .about {
    width: 100%;
    margin: 2vh 0;
  }

  .news {
    width: 70%;
    margin: 2vh 0;
  }

  .footer-one {
    width: 100%;
    margin-top: 6vh;
  }

  .footer-two {
    width: 100%;
    padding-bottom: 50px; // 给底部留空间，避免按钮遮挡
  }
}

/* 回到顶部按钮（确保绝对显眼） */
.back-to-top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 99999; // 提至最高层级，避免被遮挡
  opacity: 0;
  transform: translateY(100px) scale(0.8);
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.8); // 加发光效果，绝对显眼

  .arrow {
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: #ff0000;
    box-shadow: 0 0 40px rgba(255, 0, 0, 1);
    .arrow {
      transform: translateY(-3px);
    }
  }

  &:active {
    transform: translateY(0) scale(0.9) !important;
  }
}

.back-to-top.show {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto !important;
  overflow-x: hidden;
  overflow-y: auto !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

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

ul,
ol {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>

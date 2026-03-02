<template>
  <!-- 模板部分完全保留你原来的代码，无需改动 -->
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

    <!-- 回到顶部按钮：保留原有结构，仅改样式 -->
    <div class="horizon-container" :class="{ show: isShowBackTop }">
      <div class="back-to-top" @click="scrollToTop" title="回到顶部">
        <img src="/images/back-top.png" alt="回到顶部" />
      </div>
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
const swiperData = ref([
  { id: 1, url: "/images/1.png" },
  { id: 2, url: "/images/2.png" },
  { id: 3, url: "/images/3.png" },
]);
const testIndex = ref(-1);

// 回到顶部按钮
const isShowBackTop = ref(false);
const scrollThreshold = 300;
let scrollHandler = null;

// 滚动监听
const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  // console.log("实时滚动距离：", scrollTop);
  isShowBackTop.value = scrollTop > scrollThreshold;
};

// 点击回到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  isShowBackTop.value = false;
};

onMounted(async () => {
  scrollHandler = handleScroll;
  window.addEventListener("scroll", scrollHandler, {
    capture: true,
    passive: true,
  });
  handleScroll();
});

onActivated(() => {
  if (!scrollHandler) scrollHandler = handleScroll;
  window.addEventListener("scroll", scrollHandler, { capture: true, passive: true });
});

onDeactivated(() => {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler, { capture: true });
  }
});

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler, { capture: true });
    scrollHandler = null;
  }
});
</script>

<style scoped lang="scss">
.index-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;

  .nav-container {
    width: 100%;
  }
  .carousel-container {
    height: 75vh;
    width: 100%;
    // border: 1px solid red;
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
  }
}

.horizon-container {
  position: fixed;
  bottom: 100px;
  right: 60px;
  width: 64px;
  height: 64px;
  overflow: hidden;
  z-index: 99999;
  pointer-events: none;
}

.back-to-top {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #3498db;
  color: white;
  // border-radius: 50%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  // box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  // border: 2px solid rgba(255, 255, 255, 0.6);
  pointer-events: auto;

  transform: translateY(100%);
  opacity: 0;

  transition: transform 0.8s ease-out, opacity 0.6s ease-out;
}

.horizon-container.show .back-to-top {
  transform: translateY(0);
  opacity: 1;
}

.back-to-top:hover {
  // transform: translateY(0) scale(1.1) !important;
  background: #0d63a0;
  // box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
}

.back-to-top:active {
  // transform: translateY(0) scale(0.95) !important;
}

.arrow {
  line-height: 1;
  transform: translateY(-2px);
  font-size: 30px;
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

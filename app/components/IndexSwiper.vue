<template>
  <div class="swiper-main">
    <swiper
      class="home-swiper"
      :modules="modules"
      direction="horizontal"
      :slides-per-view="1"
      :slides-per-group="1"
      :initial-slide="0"
      :loop="true"
      :autoplay="autoplayOptions"
      :speed="800"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :init="treatData.length > 0"
    >
      <swiper-slide
        class="page-slide"
        v-for="(pageData, pageIndex) in treatData"
        :key="`page-${pageIndex}`"
      >
        <!-- 新增：图片加载错误兜底 + 懒加载，避免请求中止 -->
        <img
          :src="pageData.url"
          alt="轮播图"
          loading="lazy"
          @error="handleImgError(pageData)"
        />
      </swiper-slide>
    </swiper>
    <div class="swiper-button-container">
      <span class="custom-swiper-button-prev" @click="goPrev">
        <img src="/images/prev.png" alt="上一页" loading="lazy" />
      </span>
      <span class="custom-swiper-button-next" @click="goNext">
        <img src="/images/next.png" alt="下一页" loading="lazy" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, onMounted, nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

const modules = [Navigation, Autoplay];
const treatData = ref([]);
const swiperInstance = ref(null);

const autoplayOptions = {
  delay: 3000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

const props = defineProps({
  swiperData: {
    type: Array,
    required: true,
    default: () => [],
  },
  activeIndex: {
    type: Number,
    default: -1,
  },
});

// 修复：数据更新后等待DOM渲染完成再赋值，避免初始化异常
watch(
  () => props.swiperData,
  async (newVal) => {
    console.log(newVal);
    await nextTick(); // 等待DOM更新
    treatData.value = newVal || [];
  },
  { immediate: true, deep: true }
);

const emit = defineEmits(["swiperChange"]);

// 新增：图片加载错误兜底，避免请求中止
const handleImgError = (item) => {
  item.url = "/images/default.png"; // 替换为默认图（需提前准备）
};

const goPrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const goNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
  emit("swiperChange", swiper.activeIndex);
};

// 组件卸载时销毁Swiper实例，避免内存泄漏和请求中断
onUnmounted(() => {
  if (swiperInstance.value) {
    swiperInstance.value.destroy(true, true);
    swiperInstance.value = null;
  }
});

defineExpose({
  treatData,
  swiperInstance,
});
</script>

<style scoped lang="scss">
.swiper-main {
  width: 100%;
  height: 100%; // 核心：继承父容器（carousel-container）的75vh高度
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 1px solid red;
  overflow: hidden;
}

.home-swiper {
  box-sizing: border-box;
  width: 100%;
  height: 100%; // 继承父容器高度
  color: #ffffff;
  font-size: 16px;

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    display: none !important;
  }

  :deep(.swiper-wrapper) {
    box-sizing: border-box;
    height: 100%;
  }

  :deep(.swiper-slide) {
    width: 100% !important;
    height: 100% !important;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}

.page-slide {
  width: 100%;
  height: 100%;
  img {
    width: auto;
    height: 100%; // 强制高度100%，宽度自适应
    object-fit: cover; // 填充容器，避免变形
  }
}

.swiper-button-container {
  z-index: 99;
  width: 10vh;
  height: 15vh;
  cursor: pointer;
  position: absolute;
  right: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 26, 51, 0.4);

  .custom-swiper-button-prev {
    z-index: 99;
    width: 7vh;
    height: 7vh;
    cursor: pointer;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline-block;
      width: 3vh;
      height: 3vh;
    }
  }
  .custom-swiper-button-next {
    z-index: 99;
    width: 7vh;
    height: 7vh;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid transparent;
    img {
      display: inline-block;
      width: 3vh;
      height: 3vh;
    }
  }
}
</style>

<template>
  <!-- client-only 确保仅在客户端渲染 -->
  <client-only>
    <!-- 新增：通过props接收自定义宽高，默认100%/30vh -->
    <div
      class="plyr-player-wrap"
      ref="playerWrap"
      :style="{ width: playerWidth, height: playerHeight }"
    >
      <video controls :poster="posterUrl" class="plyr-video" :playsinline="true">
        <source :src="videoUrl" :type="videoType" />
        您的浏览器不支持HTML5视频播放，请升级浏览器
      </video>
    </div>
  </client-only>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

// 纯JS版Props定义（新增宽高自定义Props）
const props = defineProps({
  // 视频地址（必填）
  videoUrl: {
    type: String,
    required: true,
  },
  // 视频封面（可选）
  posterUrl: {
    type: String,
    default: "",
  },
  // 视频类型（可选）
  videoType: {
    type: String,
    default: "video/mp4",
  },
  // Plyr配置项（可选）
  plyrOptions: {
    type: Object,
    default: () => ({
      controls: ["play", "progress", "current-time", "mute", "volume", "fullscreen"],
      autoplay: false,
      muted: false,
      loop: false,
    }),
  },
  // 新增：播放器宽度（默认100%）
  playerWidth: {
    type: String,
    default: "100%",
  },
  // 新增：播放器高度（默认30vh）
  playerHeight: {
    type: String,
    default: "30vh",
  },
});

const playerWrap = ref(null);
let plyrInstance = null; // 去掉TS类型，直接定义

// 初始化播放器（纯JS版，无类型断言）
const initPlyr = async () => {
  // 用import.meta.client判断客户端环境（无需process）
  if (import.meta.client && playerWrap.value) {
    // 动态导入Plyr
    const Plyr = (await import("plyr")).default;
    // 导入样式
    import("plyr/dist/plyr.css");

    // 获取video元素（JS版无需类型断言）
    const videoEl = playerWrap.value.querySelector(".plyr-video");
    if (videoEl) {
      plyrInstance = new Plyr(videoEl, props.plyrOptions);
    }
  }
};

// 组件挂载时初始化
onMounted(() => {
  initPlyr();
});

// 监听视频地址变化，重新初始化
watch(
  () => props.videoUrl,
  () => {
    if (plyrInstance) {
      plyrInstance.destroy();
      plyrInstance = null;
      initPlyr();
    }
  }
);

// 组件卸载时销毁实例
onUnmounted(() => {
  if (plyrInstance && import.meta.client) {
    plyrInstance.destroy();
    plyrInstance = null;
  }
});

// 暴露方法给父组件
defineExpose({
  play: () => plyrInstance?.play(),
  pause: () => plyrInstance?.pause(),
  togglePlay: () => plyrInstance?.togglePlay(),
});
</script>

<style scoped lang="scss">
.plyr-player-wrap {
  /* 移除原有宽高，改为通过props动态控制 */
  margin: 0 auto;
  /* 核心：让容器成为相对定位，内部视频绝对定位填充 */
  position: relative;
  overflow: hidden;

  .plyr-video {
    /* 绝对定位填充整个容器 */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 保证视频填充容器且比例正常 */
    object-fit: cover;
    // object-fit: contain; //视频完整显示（不裁剪）
  }
}

/* 自定义Plyr样式 */
:deep(.plyr) {
  --plyr-color-main: #1e50ae;
  --plyr-font-family: "微软雅黑", sans-serif;
  /* 让Plyr控制栏适配容器高度 */
  height: 100%;
}

:deep(.plyr__video-wrapper) {
  height: 100%;
}
</style>

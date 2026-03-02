<template>
  <client-only>
    <!-- 新增：宽高比容器（关键！保证视频比例不变） -->
    <div class="plyr-aspect-ratio-wrap" :style="{ paddingBottom: aspectRatio }">
      <div class="plyr-player-wrap" ref="playerWrap">
        <video controls :poster="posterUrl" class="plyr-video" playsinline>
          <source :src="videoUrl" :type="videoType" />
          您的浏览器不支持HTML5视频播放，请升级浏览器
        </video>
      </div>
    </div>
  </client-only>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  videoUrl: { type: String, required: true },
  posterUrl: { type: String, default: "" },
  videoType: { type: String, default: "video/mp4" },
  plyrOptions: {
    type: Object,
    default: () => ({
      controls: ["play", "progress", "current-time", "mute", "volume", "fullscreen"],
      autoplay: false,
      muted: false,
      loop: false,
    }),
  },
  // 新增：宽高比（默认16:9，可自定义）
  aspectRatio: {
    type: String,
    default: "56.25%", // 16:9 = 9/16=56.25%
  },
});

const playerWrap = ref(null);
let plyrInstance = null;
let resizeObserver = null; // 用ResizeObserver监听容器变化（比resize事件更精准）

// 强制更新视频尺寸
const updateVideoSize = () => {
  if (plyrInstance && playerWrap.value) {
    // 强制重绘Plyr
    plyrInstance.elements.container.style.width = "100%";
    plyrInstance.elements.container.style.height = "100%";
    plyrInstance.refresh();
    // 强制视频元素适配
    const videoEl = playerWrap.value.querySelector(".plyr-video");
    if (videoEl) {
      videoEl.style.width = "100%";
      videoEl.style.height = "100%";
    }
  }
};

// 初始化播放器
const initPlyr = async () => {
  if (import.meta.client && playerWrap.value) {
    const Plyr = (await import("plyr")).default;
    import("plyr/dist/plyr.css");

    const videoEl = playerWrap.value.querySelector(".plyr-video");
    if (videoEl) {
      plyrInstance = new Plyr(videoEl, props.plyrOptions);

      // 监听容器尺寸变化（精准响应父容器缩放）
      resizeObserver = new ResizeObserver(() => {
        updateVideoSize();
      });
      resizeObserver.observe(playerWrap.value);
    }
  }
};

onMounted(() => {
  initPlyr();
});

// 监听视频地址变化
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

// 组件卸载时销毁
onUnmounted(() => {
  // 销毁ResizeObserver
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
  // 销毁Plyr实例
  if (plyrInstance && import.meta.client) {
    plyrInstance.destroy();
    plyrInstance = null;
  }
});

defineExpose({
  play: () => plyrInstance?.play(),
  pause: () => plyrInstance?.pause(),
  togglePlay: () => plyrInstance?.togglePlay(),
  refresh: updateVideoSize,
});
</script>

<style scoped lang="scss">
/* 核心：宽高比容器（保证视频比例不变） */
.plyr-aspect-ratio-wrap {
  width: 100%;
  position: relative;
  overflow: hidden;
  // 去掉固定高度，完全靠padding-bottom控制比例
}

.plyr-player-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.plyr-video {
  width: 100% !important;
  height: 100% !important;
  // 关键：用contain代替cover，保证视频完整显示
  object-fit: contain !important;
}

/* 强制Plyr完全适配容器 */
:deep(.plyr) {
  --plyr-color-main: #1e50ae;
  --plyr-font-family: "微软雅黑", sans-serif;
  width: 100% !important;
  height: 100% !important;
  position: absolute !important;
  top: 0;
  left: 0;
}

:deep(.plyr__video-wrapper) {
  width: 100% !important;
  height: 100% !important;
}

:deep(.plyr__controls) {
  width: 100%;
  box-sizing: border-box;
}
</style>

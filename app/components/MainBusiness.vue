<!--
 * @Author: Sid Li
 * @Date: 2026-02-27 14:46:29
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-03-02 15:58:45
 * @FilePath: \nuxt-free\app\components\MainBusiness.vue
 * @Description: 
-->
<template>
  <div class="business-container">
    <div class="business-title">
      <span class="title-zh">专业领域</span>
      <span class="title-en">MAIN BUSINESS</span>
    </div>

    <div class="business-content">
      <div
        class="business-content-item"
        v-for="item in businessContentItems"
        :key="item.id"
      >
        <img :src="item.pic" alt="" />
        <div class="item-name">
          <span>{{ item.name }}</span> <span class="item-line"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const businessContentItems = ref([
  {
    id: 1,
    name: "TRIO全系列运动控制器",
    pic: "/images/b1.png",
  },
  {
    id: 2,
    name: "TRIO、埃斯顿伺服产品",
    pic: "/images/b2.png",
  },
  {
    id: 3,
    name: "工业机器人集成",
    pic: "/images/b3.png",
  },

  {
    id: 4,
    name: "运控系统开发设计",
    pic: "/images/b4.png",
  },
]);

onMounted(() => {
  console.log("组件挂载了");
});
</script>

<style scoped lang="scss">
.business-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  // border: 2px solid blue;
  box-sizing: border-box;
  .business-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6vh 0 6vh 0;

    width: 100%;
    height: 10vh;
    // border: 2px solid red;
    box-sizing: border-box;
    .title-zh {
      font-size: 30px;
      font-weight: bold;
    }
    .title-en {
      font-size: 16px;
      color: #999999;
    }
  }
  .business-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 36vh;
    // border: 5px solid red;
    box-sizing: border-box;
    .business-content-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      width: 22%;
      height: 100%;
      // border: 2px solid red;
      box-sizing: border-box;

      img {
        width: 100%;
        height: 30vh;
        // border: 3px solid green;
        box-sizing: border-box;
      }

      .item-name {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        // border: 3px solid yellow;
        height: 5vh;

        span {
          font-size: 20px;
          // margin: 1vh 0 0.5vh 0;
          // border: 3px solid blue;
        }
        .item-line {
          width: 35px;
          height: 4px;
          background-color: #086be0;
        }
      }
    }
  }
}
</style>

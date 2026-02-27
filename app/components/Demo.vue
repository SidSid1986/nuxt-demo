<!--
 * @Author: Sid Li
 * @Date: 2026-02-27 14:46:29
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-27 17:27:17
 * @FilePath: \nuxt-free\app\components\Demo.vue
 * @Description: 
-->
<template>
  <div class="demo-container">
    <div class="demo-title">
      <span class="title-zh">机器人应用案例</span>
      <span class="title-en">APPLICATION SCENARIO</span>
    </div>

    <div class="demo-content">
      <div class="tab-item">
        <span
          v-for="(item, index) in tabList"
          :key="item.id"
          @mouseenter="hoverItem(item.id)"
          class="tab-span"
          :class="{
            'tab-item-active': item.id == selectedID,
            'tab-border': index < tabList.length - 1,
          }"
          >{{ item.name }}</span
        >
      </div>

      <div class="tab-content-container">
        <div class="tab-content-1" v-if="selectedID == 1">
          <img class="img-left" src="/images/shang1.png" alt="" />
          <div class="img-right">
            <span>烟台某刹车盘加工企业整线应用</span>
            <img src="/images/shang2.png" alt="" />
            <img src="/images/shang2.png" alt="" />
          </div>
        </div>
        <div class="tab-content-2" v-if="selectedID == 2">
          <img src="/images/damo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tabList = ref([
  {
    id: 1,
    name: "上下料",
  },

  {
    id: 2,
    name: "打磨",
  },
]);

const hoverItem = (id) => {
  console.log(id);
  selectedID.value = id;
};

const selectedID = ref(1);

onMounted(() => {
  console.log("组件挂载了");
});
</script>

<style scoped lang="scss">
.demo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border: 2px solid blue;
  box-sizing: border-box;
  .demo-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10vh 0 2vh 0;

    width: 100%;
    height: 10%;
    border: 2px solid red;
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
  .demo-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 2px solid red;
    box-sizing: border-box;
    .tab-item {
      width: 200px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: 2px solid green;
      position: relative;

      .tab-border {
        &::after {
          content: "";
          position: absolute;
          left: 50%; // 水平居中
          top: 25%; // 垂直向上偏移，让竖线变短
          transform: translateX(-50%); // 精准居中
          width: 1px; // 竖线宽度
          height: 50%; // 竖线高度（50%=tab高度的一半，短竖线）
          background-color: #ccc; // 竖线颜色，可自定义
        }
      }
      .tab-span {
        font-size: 16px;
        width: 80px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: default;
      }
    }

    .tab-content-container {
      width: 100%;
      border: 2px solid red;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .tab-content-1 {
        margin-top: 2vh;
        height: 75vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border: 3px solid yellow;
        width: 100%;

        .img-left {
          height: 70vh;
          width: 50%;
          border: 2px solid green;
        }

        .img-right {
          height: 70vh;
          width: 50%;
          border: 2px solid green;
          padding: 2vh 0 0 5vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;

          span {
            font-size: 20px;
            font-weight: bold;
          }

          img {
            width: 100%;
            height: 30vh;
            border: 2px solid blue;
          }
        }
      }

      .tab-content-2 {
        margin-top: 2vh;
        height: 75vh;
        border: 3px solid yellow;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img {
          height: 70vh;
        }
      }
    }
  }
}

.tab-item-active {
  color: #1e50ae;
  border-bottom: 2px solid #1e50ae;
}
</style>

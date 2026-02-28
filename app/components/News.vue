<!--
 * @Author: Sid Li
 * @Date: 2026-02-27 14:46:29
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-28 14:18:05
 * @FilePath: \nuxt-free\app\components\News.vue
 * @Description: 
-->
<template>
  <div class="news-container">
    <div class="news-title">
      <span class="title-zh">新闻中心</span>
      <span class="title-en">NEWS CENTER</span>
    </div>

    <div class="news-content">
      <div class="news-content-item" v-for="item in newsContentItems" :key="item.id">
        <img :src="item.pic" alt="" />
        <div class="news-content-item-text">
          <div class="news-title-zh">{{ item.title }}</div>
          <div class="news-name-zh">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const newsContentItems = ref([
  {
    id: 1,
    title: " 阜瑞快讯|埃斯顿机器人全国联保网络正式启动，华北授权网点高效服务保驾护航！",
    name:
      "华北区域唯一授权联保网点烟台阜瑞智能装备有限公司|以山东为枢纽，辐射京津冀、晋蒙及东三省。阜瑞智能作为深耕工业机器人研发与高端系统集成的高新技术企业汇聚了来自机械制造、数控技术、运动伺服控制及自动化领域的顶尖技术团队，具备行业领先的自主研发能力和深度定制的行业解决方案设计实力，致力于为客户解决各类自动化应用技术难题。2025年战略升级后，其推出“安心+高效”双保险服务——30分钟极速响应、全...",
    pic: "/images/n1.png",
  },
  {
    id: 2,
    title: " 阜瑞快讯 | 埃斯顿授权阜瑞智能为华北区域指定联保网点",
    name:
      "华北区域唯一授权联保网点烟台阜瑞智能装备有限公司|以山东为枢纽，辐射京津冀、晋蒙及东三省。阜瑞智能作为深耕工业机器人研发与高端系统集成的高新技术企业汇聚了来自机械制造、数控技术、运动伺服控制及自动化领域的顶尖技术团队，具备行业领先的自主研发能力和深度定制的行业解决方案设计实力，致力于为客户解决各类自动化应用技术难题。2025年战略升级后，其推出“安心+高效”双保险服务——30分钟极速响应、全...",
    pic: "/images/n2.png",
  },
  {
    id: 3,
    title: " 方案速递|储能柜门板打磨解决方案",
    name:
      "针对储能柜门板的打磨方案，通过“机器人+智能感知+工艺集成”的模式，解决了传统人工打磨效率低、质量不稳定的痛点，同时兼顾了灵活性与可靠性，是新能源储能装备制造领域升级的关键赋能技术。未来，随着储能柜向大型化、轻量化发展，该方案还可进一步融合AI自主学习，实现更智能的“无人化”打磨。一、打磨前VS打磨后二、打磨工艺要求01精度控制力控精度：实时感知并精准调节打磨压力，确保不过切或欠切。平面度要...",
    pic: "/images/n3.png",
  },
]);

onMounted(() => {
  console.log("组件挂载了");
});
</script>

<style scoped lang="scss">
.news-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border: 2px solid blue;
  box-sizing: border-box;
  .news-title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0vh 0 6vh 0;
    width: 100%;
    height: 10vh;
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
  .news-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: auto;
    border: 2px solid red;
    box-sizing: border-box;
    .news-content-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: start;
      width: 30%;
      height: 100%;
      border: 2px solid red;
      box-sizing: border-box;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;

      img {
        width: 100%;
        height: 30vh;
        border: 3px solid green;
        box-sizing: border-box;
        object-fit: cover;
        object-position: center;
      }

      .news-content-item-text {
        padding: 10px;
        width: 100%;
        height: 30%;
        border: 3px solid green;
        box-sizing: border-box;
        .news-title-zh {
          color: #333;
          // 超出部分省略号
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          margin: 10px 0 10px 0;
        }

        .news-name-zh {
          font-size: 16px;
          color: #999999;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>

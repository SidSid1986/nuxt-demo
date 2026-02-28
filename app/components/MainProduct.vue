<!--
 * @Author: Sid Li
 * @Date: 2026-02-27 14:46:29
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-28 13:54:31
 * @FilePath: \nuxt-free\app\components\MainProduct.vue
 * @Description: 
-->
<template>
  <div class="product-container">
    <div class="product-title">
      <span class="title-zh">产品中心</span>
      <span class="title-en">FEATURED PRODUCTS</span>
    </div>

    <div class="product-content">
      <img src="/images/p.png" alt="" />
      <div class="product-content-right">
        <span class="product-title-zh">TRIO系列产品</span>
        <span class="product-desc">
          <span class="product-desc-title">13年</span>
          <span class="product-desc-text">TRIO销售及应用经验，可为您提供远程支持</span>
        </span>

        <div class="product-desc-content">
          <div class="product-desc-item" v-for="item in productList" :key="item.id">
            <img :src="item.url" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="more-btn">MORE+</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const productList = ref([
  {
    id: 1,
    name: "MC405",
    url: "/images/p1.png",
  },
  {
    id: 2,
    name: "NANO",
    url: "/images/p2.png",
  },
  {
    id: 3,
    name: "MC6N",
    url: "/images/p3.png",
  },
]);

onMounted(() => {
  console.log("组件挂载了");
});
</script>

<style scoped lang="scss">
.product-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border: 2px solid blue;
  box-sizing: border-box;
  .product-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6vh 0 6vh 0;

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
  .product-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    border: 2px solid red;
    box-sizing: border-box;
    img {
      width: auto;
      height: 100%;
    }

    .product-content-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding-left: 20px;
      width: 50%;
      height: 100%;
      border: 2px solid green;
      box-sizing: border-box;

      .product-title-zh {
        font-size: 30px;
        font-weight: bold;
        color: #1262ad;
        height: 8vh;
        line-height: 8vh;
        border: 1px solid red;
      }
      .product-desc {
        padding: 0 0 4vh 0;
        .product-desc-title {
          font-size: 22px;
          font-weight: bold;
          font-style: italic;
          color: #da1b43;
          margin-right: 5px;
        }
        .product-desc-text {
          font-size: 18px;
          color: #666666;
        }
      }
      .product-desc-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border: 2px solid red;
        box-sizing: border-box;
        .product-desc-item {
          border: 1px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 30%;
          height: 100%;
        }
      }
    }
    .more-btn {
      font-size: 18px;
      color: #1262ad;
      height: 3vh;
      line-height: 3vh;
      border: 1px solid #1262ad;
      cursor: pointer;
      padding: 0 10px;
    }

    .more-btn:hover {
      background-color: #1262ad;
      color: #ffffff;
    }
  }
}
</style>

<template>
  <div class="footer-one-container">
    <div class="footer-one-text">
      <div class="footer-one-text-title">因为专业 值得信赖</div>
      <div class="footer-one-text-content">
        <div class="footer-div-text-content-item footer-color">
          烟台阜瑞智能装备有限公司
        </div>
        <div class="footer-one-text-content-item footer-color">
          地址：山东省烟台市高新区蓝海路1号D601
        </div>
        <div class="footer-one-text-content-item footer-color">
          公司座机：0535-6666657
        </div>
        <div class="footer-one-text-content-item footer-color">
          销售电话：17763251959（同微信）
        </div>
      </div>

      <div class="footer-one-text-contact">联系我们</div>

      <img class="footer-one-text-contact-img" src="/images/footer1.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  console.log("组件挂载了");
});
</script>

<style scoped lang="scss">
.footer-one-container {
  margin-top: 10vh;
  border: 2px solid red;
  box-sizing: border-box;
  height: 40vh;
  background: url("/images/footerBg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .footer-one-text {
    height: 100%;
    width: 70%;
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    .footer-one-text-title {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 20px;
    }

    .footer-div-text-content-item {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .footer-one-text-content-item {
      margin-bottom: 10px;
      font-size: 16px;
    }
    .footer-one-text-contact {
      font-size: 16px;
      margin-top: 40px;
      border: 1px solid #fff;
      width: 150px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }

    .footer-one-text-contact-img {
      position: absolute;
      right:0;
      top: -100px;
    }
  }
}

.footer-color {
  color: rgb(180, 180, 180);
}
</style>

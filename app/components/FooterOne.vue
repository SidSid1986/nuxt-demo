<template>
  <div class="footer-one-container">
    <div class="footer-content">
      <div class="footer-content-left">
        <div class="footer-one-text-title">因为专业 值得信赖</div>
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

        <div class="footer-one-text-contact">联系我们</div>
      </div>

      <div class="footer-content-right">
        <img
          class="footer-one-text-contact-img"
          src="/images/footer1.png"
          alt="联系我们"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  console.log("FooterOne组件挂载了");
});
</script>

<style scoped lang="scss">
.footer-one-container {
  margin-top: 10vh;
  // border: 2px solid red;
  box-sizing: border-box;
  height: 40vh;
  background: url("/images/footerBg.png") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  .footer-content {
    width: 70%;
    height: 100%;
    // border: 2px solid yellow;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2vh;
    box-sizing: border-box;

    .footer-content-left {
      width: 48%;
      height: 100%;
      // border: 3px solid green;
      box-sizing: border-box;
      padding: 0 10px;
      overflow: hidden;

      .footer-one-text-title {
        font-size: 40px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 20px;

        word-break: break-all;
        line-height: 1.2;
      }

      .footer-div-text-content-item {
        font-size: 20px;
        margin-bottom: 10px;
        color: rgb(180, 180, 180);
        word-break: break-all;
      }

      .footer-one-text-content-item {
        margin-bottom: 10px;
        font-size: 16px;
        color: rgb(180, 180, 180);
        word-break: break-all;
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

        box-sizing: border-box;
      }
    }

    .footer-content-right {
      width: 50%;
      height: 100%;
      // border: 3px solid blue;
      position: relative;

      .footer-one-text-contact-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -80px;
      }
    }
  }
}
</style>

<!--
 * @Author: Sid Li
 * @Date: 2026-02-27 14:46:29
 * @LastEditors: Sid Li
 * @LastEditTime: 2026-02-28 13:45:17
 * @FilePath: \nuxt-free\app\components\About.vue
 * @Description: 
-->
<template>
  <div class="about-container">
    <div class="about-title-content">
      <div class="about-title-logo">
        <img src="/images/aboutT.png" alt="logo" />
        <span>ABOUT US</span>
      </div>

      <div class="about-title">
        <span class="title-zh">关于我们</span>
        <span class="title-en">ABOUT US</span>
      </div>

      <div class="about-empty"></div>
    </div>

    <div class="about-content">
      <div class="line-content">
        <div class="line-one-content">
          <span class="line-one-title">烟台阜瑞智能装备有限公司</span>
          <span class="about-text"
            >成立于2009年，是一家专注于工业机器人、非标智能设备研发与制造，以及运动控制领域硬件开发与高端系统集成服务的高新技术企业。公司汇聚了来自机械制造、数控技术、运动伺服控制及自动化领域的顶尖人才与专业研发团队，具备行业领先的自主研发能力和深度定制的行业解决方案设计实力，致力于为客户解决各类自动化应用技术难题。</span
          >
        </div>

        <div class="line-two-content">
          <div class="line-two-item line-two-title about-text">
            凭借卓越的产品性能、突破性的技术应用以及以客户为核心的经营理念，公司已成功交付多个行业标杆项目，包括：
          </div>
          <div class="line-two-item line-two-text">
            <span class="abouspanxt-title">汽车制造领域​​：</span>
            <span class="about-text"
              >长安铃木汽车车身生产线机span系统、沈阳宝马车身自动线；</span
            >
          </div>
          <div class="line-two-item line-two-text">
            <span class="about-span-title">​​智能制造领域​​：</span>
            <span class="about-text"
              >机器人化肥码垛系统、兴民智通智能轮毂打磨工作站​​</span
            >
          </div>
          <div class="line-two-item line-two-text">
            <span class="about-span-title">运动控制与自动化​​：</span>
            <span class="about-text"
              >杰瑞数字六自由度驾控平台控制系统、多轴联动专用机械控制系统</span
            >
          </div>
          <div class="line-two-item line-two-text">
            <span class="abouspanan-title">专用设备开发​​：</span>
            <span class="about-text"
              >自研Delta机器人、玻璃修边机械手、智能玻璃磨角机、智能刷油机械手、刹车盘精加工线机器人系统、
              反应罐自动给料系统等公司已获得多项行业专利和高新技术成果，为客户创造了显著的经济效益和社会效益。</span
            >
          </div>
        </div>

        <div class="line-three-content">
          <div class="line-two-item line-two-title about-text">
            2025年战略升级​​，阜瑞智能与埃斯顿机器人达成深度合作，成为埃斯顿机器人全国首家联保网点，为华北地区客户提供​​“安心+高效”双保险服务​​，包括：
          </div>
          <div class="about-text">✅ ​​快速响应​​——及时解决设备问题</div>
          <div class="about-text">✅ ​​强大技术支持​​——专业团队全程护航</div>
          <div class="about-text">✅ ​​全周期维保​​——涵盖巡检、保养、维修！</div>
        </div>

        <div class="more-icon-content">
          <div class="more-icon">
            <img src="/images/right.png" alt="" />
          </div>
        </div>
      </div>
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
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/images/about.png") no-repeat center center;
  width: 100%;
  height: 100%;
  border: 2px solid blue;
  box-sizing: border-box;

  .more-icon-content {
    position: relative;
    border: 3px solid green;
    height: 8vh;
  }

  .more-icon {
    position: absolute;
    bottom: 5%;
    left: 3%;
    width: 50px;
    height: 50px;
    background-color: #076ce0;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .about-title-content {
    width: 70%;
    height: 12vh;
    margin: 8vh 0 0vh 0;
    border: 3px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .about-title-logo {
      width: 30%;
      height: 100%;
      border: 2px solid red;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: start;

      img {
        width: 50px;
        height: 35px;
      }

      span {
        font-size: 60px;
        margin: 0 0 0 1vh;
        font-family: "Times New Roman";
        font-style: italic;
        color: rgb(246, 246, 246);
      }
    }

    .about-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;
      border: 2px solid red;
      box-sizing: border-box;
      height: 100%;

      .title-zh {
        font-size: 30px;
        font-weight: bold;
      }

      .title-en {
        font-size: 16px;
        color: #999999;
      }
    }

    .about-empty {
      width: 30%;
      height: 100%;
      border: 2px solid red;
      box-sizing: border-box;
    }
  }

  .about-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90%;
    border: 4px solid red;
    box-sizing: border-box;
    padding-left: 30px;

    .line-content {
      width: 70%;
      border: 2px solid red;
      box-sizing: border-box;

      .line-one-content {
        width: 80%;

        .line-one-title {
          color: rgb(38, 8, 132);
          font-weight: bold;
        }
      }

      .line-two-content {
        width: 80%;
        border: 2px solid red;
        box-sizing: border-box;
        margin-top: 3vh;
      }

      .line-three-content {
        width: 74%;
        border: 2px solid red;
        box-sizing: border-box;
        margin-top: 3vh;
      }
    }
  }
}

.about-text {
  color: rgb(102, 102, 102);
}

.about-text-title {
  color: rgb(102, 102, 102);
  font-weight: bold;
}

.line-two-item {
  margin-bottom: 0.2vh;
  width: 80%;
}
</style>

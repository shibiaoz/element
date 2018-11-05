<template>
  <div class="welcome-page">
    <div class="logo-wrap">
      <i class="icon logo"></i>
      <em class="divider"></em>
      <div class="search-wrap">
        <i class="zyb-icon-common-search-o"></i>
        <input
          class="search"
          type="text"
          placeholder="搜索组件库..."
        />
      </div>
    </div>
    <div class="design-intro">
      <h1 class="title">e.Design</h1>
      <em class="radius-bar"></em>
      <p class="intro-word">
        作业帮UI组件库，一套为开发者、设计师和产品经理的准备的通用语言让易用性和统一性致力于更好的提升用户体验
      </p>
      <div class="enter-list">
        <a class="primary" @click="enter">开始使用</a>
        <a class="default">了解详情</a>
      </div>
    </div>
    <div class="icon icon-left-bottom"></div>
    <div class="right-circle"></div>
    <div class="icon right-main" :style="getStyle()"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    enter() {
      // this.$router.push('/zybColor');
      this.$router.push('/zh-CN/component/layout');
    },
    getStyle() {
      const vw = document.documentElement.clientWidth;
      const vh = document.documentElement.clientHeight;
      return {
        width: vw / 1366 * 660 + 'px',
        height: vh / 768 * 700 + 'px',
        right: vw / 1366 * 121 + 'px',
        bottom: '0px'
      };
    }
  }
};
</script>

<style scoped >
.welcome-page {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  font-size: 12px;
  overflow: hidden;
  z-index: 1000000;
}

.icon {
  display: block;
  background-repeat: no-repeat;
  background-size: 100%;
}

.logo-wrap {
  position: absolute;
  left: 40px;
  top: 40px;
  display: flex;
  align-items: center;
}

.logo {
  width: 120px;
  height: 39px;
  background-color: #fff;
  background-image: url(~examples/assets/zyb/logo/logo_green.svg);
}

.divider {
  display: block;
  width: 1px;
  height: 16px;
  margin-left: 24px;
  margin-right: 16px;
  background-color: #E1E2E6;
}

.search-wrap {

  .search {
    font-family: PingFangSC-Regular;
    margin-left: 5px;
    width: 100px;
    height: 12px;
    color: #B9BABD;
    border: none;
    outline: none;
  }
}

.design-intro {
  position: absolute;
  left: 94px;
  top: 33vh;

  .title {
    font-size: 48px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: #323233;
    line-height: 67px;
  }

  .radius-bar {
    display: block;
    width: 32px;
    height: 8px;
    background-color: #13C690;
    border-radius: 10px;
  }

  .intro-word {
    width: 440px;
    height: 48px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(117, 118, 120, 1);
    line-height: 24px;
    margin-top: 16px;
  }
}

.enter-list {
  margin-top: 38px;
  font-size: 0;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 40px;
    border-radius: 20px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    transition: background 1s;
  }

  .primary {
    color: #fff;
    margin-right: 24px;
    background: linear-gradient(to right, #13C690, #89F16B);

    &:hover {
      background: linear-gradient(to right, #43D1A5, #A2F387);
    }

    &:active {
      background: linear-gradient(to right, #11B281, #7BD860);
    }
  }

  .default {
    color: #323233;
    border: 1px solid #E1E2E6;
    background-color: #fff;

    &:hover {
      background-color: #F7F8FB;
    }

    &:active {
      background-color: #F0F1F5;
    }
  }
}

.icon-left-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 199px;
  height: 79px;
  background-image: url(~examples/assets/zyb/bg_index_left.png);
}

.right-circle {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -25%);
  height: 150vh;
  width: 150vh;
  border-radius: 100%;
  background:linear-gradient(150deg, rgba(9, 193, 121, 1) 0%, rgba(187, 255, 156, 1) 100%);
}

.right-main {
  position: absolute;
  background-image: url(~examples/assets/zyb/bg_index_pic@2x.png);
}
</style>

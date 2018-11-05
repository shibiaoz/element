<template>
  <div class="header-bar">
    <div class="logo icon" @click="logo"></div>
  </div>
</template>
<script>
export default {
  methods: {
    logo() {
      window.location.href = '/';
    }
  }
};
</script>
<style scoped >
  .header-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(131, 134, 143, .15);
    z-index: 10;
    .logo {
      height: 39px;
      width: 120px;
      margin-left: 40px;
      margin-top: 13px;
      background-image: url(./images/logo_green.svg);
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
</style>

<template>
  <div class="layout-wrap">
    <Header />
    <Menu
      :menuList="menuList"
    />
    <div class="layout-content">
      <slot></slot>
      <Bottom></Bottom>
    </div>
  </div>
</template>

<script>
import Header from './header';
import Menu from './menu';
import Bottom from './bottom';
import './layout.scss';
import { deepClone } from 'examples/util/util';

export default {
  name: 'demo-layout',
  props: {
    menu: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    const { menu = [] } = this;
    return {
      menuList: deepClone(menu)
    };
  },
  components: {
    Header,
    Menu,
    Bottom
  },
  watch: {

    /**
     * 监听传入menu数据的变动，处理传入的menu数据
     *
     * @param {Array} newVal 变动的新数据
     */
    menu(newVal) {
      this.menuList = deepClone(newVal);
    }
  }
};
</script>

<style scoped>

  .layout-content {
    margin-left: 262px;
    margin-top: 95px;
    margin-right: 160px;
  }
</style>

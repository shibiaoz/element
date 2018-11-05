<template>
  <div class="layout-menu-wrap">
    <div class="menu-header">Components</div>
    <el-menu
      class="layout-menu"
      router
      >
      <el-submenu
        v-for="(item, index) in menuList"
        :index="`${index}`"
        :key="index">
        <template slot="title">
          <span>{{item.groupName}}</span>
        </template>
        <el-menu-item
          v-for="subItem in item.list"
          :key="subItem.path"
          :index="'/zh-CN/component' + subItem.path">
          {{subItem.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { getPathName } from 'examples/util/util';
export default {
  props: {
    menuList: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      router: getPathName()
    };
  },
  beforeMount() {
    this.$router.afterEach(() => {

      // 当路由该变时，hash可能还没有变，需要延迟处理hash改变后的选中状态
      // this.$nextTick(() => {
      //   this.router = getPathName();
      // });
    });
  }
};
</script>

<style scoped >
  .layout-menu-wrap {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 230px;
    left: 0;
    top: 95px;
    bottom: 0;
    border-right: 1px solid #E1E2E6;
  }

  .el-menu {
    border-right: none;
  }

  .layout-menu {
    flex: 1;
    overflow: auto;
  }

  .menu-header {
    font-size: 12px;
    font-family: Helvetica;
    color: #323233;
    margin-bottom: 29px;
    margin-left: 40px;
  }
</style>

<style>
  .layout-menu-wrap {

    .el-submenu__icon-arrow {
      right: 16px;
      display: inline-block;
      height: 0;
      width: 0;
      border: 4px solid transparent;
      border-top-color: #83868f;
      margin-top: -2px;
      transform-origin: 50% 2px;

      &:before {
        content: none;
      }
    }

    .el-submenu__title {
      padding-left: 40px !important;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      color: #323233;

      &:hover {
        background-color: @zyb-grey-6;
      }

      span {
        vertical-align: unset;
      }
    }

    .el-menu-item {
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      color: #969799;
      padding-left: 56px !important;

      &:hover {
        background-color: @zyb-grey-6;
      }

      &.is-active {
        background-color: #E6FAEF;

        &:before {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: @zyb-green-1;
        }
      }
    }
  }
</style>

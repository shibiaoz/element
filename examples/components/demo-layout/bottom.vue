<template>
  <div class="bottom-menu">
    <router-link :to="prev.link" v-show="prev.title">
      <el-button type="text-icon" icon="el-icon-arrow-left">{{prev.title}}</el-button>
    </router-link>
    <router-link :to="next.link" v-show="next.title">
      <el-button type="text-icon">{{next.title}}<i class="el-icon-arrow-right"></i></el-button>
    </router-link>
  </div>
</template>
<script>
  import {zybMenu} from 'examples/constant/menu.js';

  export default {
    data() {
      return {
        menuAllList: [],
        prev: {},
        next: {}
      };
    },
    created() {
      zybMenu.forEach((val) => {
        this.menuAllList = this.menuAllList.concat(val.children);
      });
      this.findPN();
    },
    watch: {
      $route() {
        this.findPN();
      }
    },
    methods: {
      findPN() {
        var activeMenu = this.menuAllList.findIndex((val) => {
          return val.link === this.$route.path.slice(1);
        });
        if (activeMenu !== -1) {
          let next = this.menuAllList[activeMenu + 1];
          let prev = this.menuAllList[activeMenu - 1];
          next ? this.next = next : this.next = {title: '', link: ''};
          prev ? this.prev = prev : this.prev = {title: '', link: ''};
        } else {
          this.next = {title: '', link: ''};
          this.prev = {title: '', link: ''};
        }
      }
    }
  };
</script>
<style>
  .bottom-menu {
    padding: 12px 0;
    overflow: hidden;
    a {
      display: inline-block;
      overflow: hidden;
      float: left;
      &:last-child {
        float: right;
      }
    }
    span {
      font-size: 14px;
    }
  }
</style>

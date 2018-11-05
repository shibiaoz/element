<template>
  <div class='color-item'
  :data-clipboard-text='colorDef'
  @click='copy'
  title='点击复制'>
    <i :style='{backgroundColor: colorValue, color: showColor}'>{{ colorDef }}</i>
    <p>{{ colorValue }}</p>
    <span>{{ colorRGB }}</span>
    <span>{{ colorName }}</span>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  name: 'colorItem',
  props: {
    colorDef: String,
    colorName: String,
    colorValue: String,
    showColor: String,
    colorRGB: String
  },
  methods: {
    copy() {
      const clipboard = new Clipboard('.color-item');
      clipboard.on('success', () => {
        this.$message({
          message: '复制成功',
          type: 'success'
        });
        clipboard.destroy();
      });
      clipboard.on('error', () => {
        this.$message({
          message: '该浏览器不支持自动复制',
          type: 'success'
        });
        clipboard.destroy();
      });
    }
  }
};
</script>

<style scoped >
.color-item {
  font-size: 12px;
  line-height: 2;
  cursor: pointer;
  width: 180px;
  display: inline-block;
  vertical-align: top;
  i {
    display: block;
    width: 130px;
    padding-left: 10px; 
    line-height: 40px;
    margin: 10px 0;
    border-radius: 40px;
    color: #fff;
  }
  span {
    display: block;
    color: @zyb-font-grey-5;
  }
  span, p{
    padding-left: 10px;
  }
}
</style>

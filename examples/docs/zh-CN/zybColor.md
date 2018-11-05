  <div class="zyb-color-page">
    <h2>Color 色彩</h2>
    <p>概述</p>
    <span>使用较为的绿色作为主色调，跟进不同的后台风格，延展蓝色作为可选择颜色库，统一修改组件整体配色。</span> 
    <div class="color-team" v-for="(item, index) of colorMap" :key="index">
      <label>{{ item.name }}</label></br>
      <colorItem
      v-for="(v, i) of item.colors"
      :colorDef="v.colorDef"
      :colorName="v.colorName"
      :colorValue="v.colorValue"
      :colorRGB="v.colorRGB"
      :showColor="v.showColor"
      :key="i"></colorItem>
    </div>
  </div>
</template>

<script>
import colorItem from 'examples/components/zyb-color/color-item.vue';
import colorMap from 'examples/components/zyb-color/color-map.js';

export default {
  name: 'zybColor',
  data() {
    return {
      colorMap: colorMap
    };
  },
  components: {
    colorItem
  }
};
</script>


<style scoped>
.zyb-color-page {
  line-height: 2;
  > h2 {
    font-size: 28px;
  }
  > p {
    font-size: 20px;
  }
  > span {
    font-size: 12px;
    color: @zyb-font-grey-4;
  }
}
.color-team {
  padding-top: 30px;
  label {
    line-height: 3;
    min-width: 100px;
  }
}
</style>
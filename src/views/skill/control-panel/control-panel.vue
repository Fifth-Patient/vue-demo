<template>
  <div class="views-skill-control-panel">
    <div class="float-left">
      <p v-for="item in 9" :key="item.index">
        <template v-for="deepItem in 5">{{ Math.ceil(Math.random()*9) }} {{ deepItem }}</template>
      </p>
    </div>
    <div class="float-right">
      <p v-for="item in 9" :key="item.index">
        <template v-for="deepItem in 9">{{ Math.ceil(Math.random()*9) }} {{ deepItem }}</template>
      </p>
    </div>

    <!-- 模拟pre真实使用场景 -->
    <pre v-text="$data" class="pre-panel"></pre>

  </div>
</template>

<script>
import Package from "@/../package.json"

export default {
  name: "views-skill-control-panel",
  data() {
    return {
      strong: "<strong>I 'm strong</strong>",
      debugger: true,
      arr: [1, 2, 3, 4, 5],
      package: Package
    };
  }
};
</script>

<style lang="stylus">
.views-skill-control-panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .float-left {
    float: left;
    width: 20%;
    min-height: 100%;
    color: #fff;
    background-color: maroon;
  }

  .float-right {
    float: right;
    width: 80%;
    min-height: 100%;
    background-color: skyblue;
  }

  .pre-panel {
    position: absolute;
    z-index: 999999;
    left: 20px;
    top: 20px;
    bottom: 20px;
    width: 380px;
    overflow: auto;
    background: rgba(0, 0, 0, .7); // 建议半透明背景
    color: #34ecff; // 亮色的颜色即可
    font-size: 16px;
    font-weight normal;
    line-height 20px;
    text-indent 0;
  }
}
</style>

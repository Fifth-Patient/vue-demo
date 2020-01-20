<template>
  <pre 
    class="control-panel"
    :style="{ width: currentWidth }"
    :class="[
      { 'position-left': position === 'left' },
      { 'position-right': position === 'right' }
    ]"><slot>{{ defaultProps }}</slot></pre>
</template>

<script>
import Package from "@/../package.json";

export default {
  name: 'control-panel',
  props: {
    width: {
      type: [String, Number],
      default: '380px'
    },
    position: {
      type: String,
      validator: (val) => ['left', 'right'].indexOf(val) !== 0,
      default: 'left'
    }
  },
  data () {
    return {
      package: Package
    }
  },
  computed: {
    defaultProps () {
      const parent = this.$parent
      if (parent && parent.$data) {
        return parent.$data
      } else {
        return this.$data
      }
    },
    currentWidth () {
      if (typeof this.width === 'string') {
        return this.width
      } else {
        return `${this.width}px`
      }
    }
  }
}
</script>

<style lang="stylus">
.control-panel {
  position: absolute;
  z-index: 999999;
  top: 20px;
  bottom: 20px;
  width: 380px;
  overflow: auto;
  background: rgba(0, 0, 0, 0.7); // 建议半透明背景
  color: #34ecff; // 亮色的颜色即可
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  text-indent: 0;
}
.position-left {
  left: 20px;
}
.position-right {
  right: 20px;
}
</style>


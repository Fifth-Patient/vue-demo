<template>
  <div class="skill-lifecycle-useful">
    <control-panel
      v-show="initialized"
      ref="controlPanel"
      postion="right">
    </control-panel>
    <p v-show="!initialized">
      loading..
    </p>
  </div>
</template>

<script>
import ControlPanel from '@/components/control-panel'

export default {
  name: 'lifecycle-useful',
  data () {
    return {
      initialized: false
    }
  },
  components: {
    ControlPanel
  },
  methods: {
    init () {
      this.initialized = true
      this.$emit('on-created') // this.staticString值更新, 但DOM不会更新
    }
  },
  created () {
    this.$data.staticString = 'static' // 定义变量
    this.$on('on-created', () => { // 定义自定义事件
      console.log(this.$data.staticString)
    })
  },
  mounted () {
    this.init()
    console.log(this.$refs.controlPanel.$options.name)
  }
}
</script>

<template>
  <div class="ref-with-if">
    <button @click="toggleShow">toggleShow</button>
    <button @click="handleTalk('Hello')">handleTalk</button>
    <p>{{showChildren}}</p>
    <ref-children v-if="showChildren" ref="children"></ref-children>
  </div>
</template>

<script>
import RefChildren from './ref-children'

export default {
  name: 'skill-ref-with-if',
  components: {
    RefChildren
  },
  data () {
    return {
      showChildren: true
    }
  },
  methods: {
    toggleShow () {
      this.showChildren = !this.showChildren
      this.$nextTick(() => {
        // Vue 在更新 DOM 时是异步执行的
        // 涉及到 DOM 的操作，可以使用$nextTick执行回调
        console.log(this.$refs.children)
      })
    },
    handleTalk (what) {
      console.log(this.$refs.children.componentName)
      console.log(this.$refs.children.sayWhat(what))
    }
  },
  mounted () {
    this.toggleShow()
  }
}
</script>

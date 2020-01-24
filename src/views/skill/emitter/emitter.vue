<template>
  <div class="skill-emitter">
    <emitter-child1 content="emitter-child1"></emitter-child1>
    <emitter-child2 content="emitter-child2"></emitter-child2>
    <emitter-child3></emitter-child3>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'
import EmitterChild1 from './child1'
import EmitterChild2 from './child2'
import EmitterChild3 from './child3'

export default {
  name: 'skill-emitter',
  mixins: [ Emitter ],
  components: {
    EmitterChild1,
    EmitterChild2,
    EmitterChild3
  },
  created () {
    // 代理child1派发的on-child1-change事件
    // 该事件不在此组件处理
    // 广播给child2的on-change事件处理
    this.$on('on-child1-change', e => {
      this.broadcast('skill-emitter-child2', 'on-change', e)
    })
  }
}
</script>

<template>
  <div class="skill-bus">
    <bus-child1 content="skill-bus-child1"></bus-child1>
    <bus-child2 content="skill-bus-child2"></bus-child2>
    <bus-child3></bus-child3>
  </div>
</template>

<script>
import '@/plugin/bus'
import BusChild1 from './child1'
import BusChild2 from './child2'
import BusChild3 from './child3'


// plgin/bus.js
// 为什么在局部引用不在全局引用？
// bus.js 并不考虑作为常规的非父子组件通讯解决方案
// 这里只是为了实例才使用，故采用局部引用

export default {
  name: 'skill-bus',
  components: {
    BusChild1,
    BusChild2,
    BusChild3
  },
  mounted () {
    console.log(this.bus)
  }
}
</script>

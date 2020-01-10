<template>
  <div class="index-layout">
    <component :is="currentMode"></component>
  </div>
</template>

<script>
import  { NightTemple }  from './home/index.js'
import { EndText } from './wild'

export default {
  name: 'index-layout',
  components: {
    NightTemple,
    EndText
  },
  computed: {
    currentMode () {
      if (this.$route.name === 'home') {
        return NightTemple
      } else if (this.$route.name ==='wild') {
        return EndText
      } else {
        return null
      }
    }
  }
}
</script>

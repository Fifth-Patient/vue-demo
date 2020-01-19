<template>
  <div>
    <control-panel
      width="200"
      position="right">
    </control-panel>
    <button @click="handleClick">clcik</button>
  </div>
</template>

<script>
import ControlPanel from '@/components/control-panel'

export default {
  name: 'skill-multi-index-2',
  components: {
    ControlPanel
  },
  data () {
    return {
      index: 2,
      random: 0
    }
  },
  methods: {
    handleClick () {
      this.random = Math.random()
    }
  }
}
</script>

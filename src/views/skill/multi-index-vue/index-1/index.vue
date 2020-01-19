<template>
  <div>
    <control-panel>
    </control-panel>
    index-1
  </div>
</template>

<script>
import ControlPanel from '@/components/control-panel'

export default {
  name: 'skill-multi-index-1',
  components: {
    ControlPanel
  },
  data () {
    return {
      index: 1  
    }
  },
  methods: {
    init () {
      console.log(this.index)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

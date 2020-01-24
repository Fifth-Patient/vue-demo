<template>
  <div class="skill-emitter-child1">
    {{ selfContent }} <button @click="handleClick">clik</button>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'

export default {
  name: 'skill-emitter-child1',
  mixins: [ Emitter ],
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selfContent: this.content
    }
  },
  methods: {
    handleClick () {
      this.dispatch('skill-emitter', 'on-child1-change', this.selfContent)
    }
  }
}
</script>

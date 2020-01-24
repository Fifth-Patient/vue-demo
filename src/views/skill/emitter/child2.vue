<template>
  <div class="skill-emitter-child2">
    {{ selfContent }} <button @click="handleClick">reset</button>
  </div>
</template>

<script>
export default {
  name: 'skill-emitter-child2',
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
      this.selfContent = this.content
    },
    handleChange ($event) {
      this.selfContent = $event
    }
  },
  created () {
    this.$on('on-change', this.handleChange)
  }
}
</script>

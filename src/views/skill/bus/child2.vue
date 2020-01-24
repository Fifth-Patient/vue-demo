<template>
  <div class="skill-bus-child2">
    {{ selfContent }} <button @click="handleClick">reset</button>
  </div>
</template>

<script>
export default {
  name: 'skill-bus-child2',
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
  mounted () {
    this.bus.$on('on-change', this.handleChange)
  }
}
</script>

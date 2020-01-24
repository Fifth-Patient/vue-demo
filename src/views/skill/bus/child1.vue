<template>
  <div class="skill-bus-child1">
    {{ selfContent }} <button @click="handleClick">clik</button>
  </div>
</template>

<script>
export default {
  name: 'skill-bus-child1',
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
      this.bus.$emit('on-change', this.selfContent)
    }
  }
}
</script>

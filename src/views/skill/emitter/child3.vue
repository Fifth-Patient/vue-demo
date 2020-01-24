<template>
  <div class="skill-emitter-child3"></div>
</template>

<script>
export default {
  name: 'skill-emitter-child3',
  methods: {
    handleChange ($event) {
      console.log($event)
    }
  },
  created () {
    this.$on('on-change', this.handleChange)
  }
}
</script>

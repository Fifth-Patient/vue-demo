<template>
  <div class="skill-bus-child3"></div>
</template>

<script>
export default {
  name: 'skill-bus-child3',
  methods: {
    handleChange ($event) {
      console.log($event)
    }
  },
  mounted () {
    this.bus.$on('on-change', this.handleChange)
  }
}
</script>

<template>
  <button class="skill-emit-event" @click="handleEmit">
    <slot>emit-event</slot>
  </button>
</template>

<script>
export default {
  name: 'skill-emit-event',
  methods: {
    handleEmit ($event) {
      this.$emit('dispatch', {
        emitParams: $event,
        emitValue: 'dispatch emit-event'
      })
    }
  }
}
</script>

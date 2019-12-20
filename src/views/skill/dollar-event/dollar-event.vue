<template>
  <div class="dollar-event">
    <button @click="handleClick">$event empty param</button>
    <button @click="handleParamClick('clcik', $event)">$event with param</button>

    <emit-event @dispatch="emitClick">emit click</emit-event>
    <emit-event @dispatch="emitParamClick('val', $event)">emit param click</emit-event>
  </div>
</template>

<script>
import emitEvent from './emit-event'

export default {
  name: 'skill-dlooar-event',
  components: {
    emitEvent
  },
  methods: {
    handleClick ($event) {
      console.log('dom事件：本组件事件')
      console.log($event)
    },
    handleParamClick (value, $event) {
      console.log({
        value,
        $event
      })
    },
    emitClick (emitEvent, $event) {
      console.log({
        emitEvent,
        $event
      })
      console.log(emitEvent.emitParams.target) // <button class="skill-emit-event">
    },
    emitParamClick (val, $event) {
      console.log({
        val,
        $event
      })
    }
  }
}
</script>

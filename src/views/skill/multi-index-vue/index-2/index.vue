<template>
  <div>
    <button @click="handleClick">clcik</button>
  </div>
</template>

<script>
export default {
  name: 'skill-multi-index-2',
  methods: {
    handleClick () {
      debugger
      console.log(this.index)
    }
  }
}
</script>

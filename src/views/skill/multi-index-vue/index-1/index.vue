<template>
  <div>
    index-1
  </div>
</template>

<script>
export default {
  name: 'skill-multi-index-1',
  data () {
    return {
      index: 1  
    }
  },
  methods: {
    init () {
      debugger
      console.log(this.index)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

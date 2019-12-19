<template>
  <div class="ref-children">
    {{ sayWhat('hi') }}
  </div>
</template>

<script>
export default {
  name: 'skill-ref-children',
  data () { 
    return {
      componentName: 'skill-ref-children'
    }
  },
  methods: {
    sayWhat(what) {
      return `${this.componentName} says ${what}`
    }
  }
}
</script>

<template>
  <pre>
    {{ $data }}
  </pre>
</template>

<script>
import Package  from '@/../package.json'
import Router from '@/router.js'

console.log(Router)

export default {
  name: 'views-skill-control-panel',
  data () {
    return {
      package: Package,
      router: JSON.stringify('Router')
    }
  }
}
</script>

<style>

</style>
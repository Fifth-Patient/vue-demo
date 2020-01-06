<template>
  <div class="skill-layout">
    <div class="router-map-wrapper">
      <router-map></router-map>
    </div>
    <div class="layout-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RouterMap from '@/components/router-map'

export default{
  name: 'skill-layout',
  components: {
    RouterMap
  }
}
</script>

<style>
.skill-layout {
  display: flex;
}
.skill-layout .router-map-wrapper {
  flex: 0 1 250px;
  max-width: 250px;
  height: 100%;
  border-right: 1px solid #ccc;
}
.skill-layout .layout-container {
  flex: 1 1 auto;
}
</style>
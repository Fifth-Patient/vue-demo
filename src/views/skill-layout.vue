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

<style lang="stylus">
.skill-layout {
  display: flex;
}
.skill-layout .router-map-wrapper {
  flex: 0 1 navbar-width;
  max-width: navbar-width;
  height: 100%;
  border-right: 1px solid #ccc;
  background-color: navbar-bg-color;
}
.skill-layout .layout-container {
  flex: 1 1 auto;
}
</style>

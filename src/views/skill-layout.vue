<template>
  <div class="skill-layout">
    <div class="router-map-wrapper">
      <router-map></router-map>
    </div>
    <div class="layout-wrapper">
      <h3 class="layout-title">
       {{ layoutTitle }}
      </h3>
      <div class="layout-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import RouterMap from '@/components/router-map'

export default{
  name: 'skill-layout',
  components: {
    RouterMap
  },
  computed: {
    layoutTitle () {
      let title = ''
      if (this.$route.meta && this.$route.meta.title) {
        title = this.$route.meta.title
      } else {
        title = this.$route.name
      }
      return title
    }
  }
}
</script>

<style lang="stylus">
.skill-layout {
  display: flex;
  height: 100%;
  .router-map-wrapper {
    flex: 0 1 navbar-width;
    max-width: navbar-width;
    height: 100%;
    border-right: 1px solid #ccc;
    background-color: navbar-bg-color;
  }
  .layout-wrapper {
    flex: 1 1 auto;
    .layout-title {
      font-size: 20px;
      line-height 25px;
      padding: 5px 0 4px;
      text-indent: 5px;
      background-color: navbar-bg-color;
      border-bottom: 1px solid #ccc;
    }
    .layout-container {
      padding: 5px;
      height: calc(100% - 10px - 35px);
      position: relative;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
}
</style>

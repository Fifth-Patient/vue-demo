<template>
  <ul class="router-map" :class="{ 'root-router': isRoot }">
    <li
      v-for="(route, index) in $props.routes"
      :key="index"
      class="router-item"
      :style="{ textIndent: useIndent ? `${indent}px` : ''}">
      <router-link
        tag="a"
        :to="getRouteFullPath(route)"
        @click.prevent="handleLink"
        :target="linkTarget"
        class="router-link"
        :class="{ 'active': $route.name === route.name }">
         {{ getRouteLabel(route) }}
      </router-link>
      <sub-router
        v-if="route.children"
        :routes="route.children"
        :useIndent="useIndent"
        :indent="$props.indent + $props.stepIndent"
        :link-target="linkTarget"
        :parent="route"
        :root="false"></sub-router>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'router-map',
  props: {
    routes: {
      type: Array,
      default () {
        return this.$router.options.routes
      }
    },
    useIndent: {
      type: Boolean,
      default: true
    },
    indent: {
      type: Number,
      default: 0
    },
    stepIndent: {
      type: Number,
      default: 10
    },
    linkTarget: {
      type: String,
      validator (target) {
        return ['_blank', '_self', '_parent', '_top'].indexOf(target) !== -1
      },
      default: '_self'
    },
    isRoot: {
      type: Boolean,
      default: true
    },
    parent: {
      type: Object,
      default: () => null
    }
  },
  components: {
    SubRouter: () => import('./index')
  },
  methods: {
    getRouteFullPath (route) {
      // TODO bug 三级路由，这里链接开始拼接错误
      if (this.parent && this.parent.path !== '/') {
        return this.parent.path + '/' + route.path
      } else {
        return route.path
      }
    },
    getRouteLabel (route) {
      let routeLabel = ''
      if (route.meta && route.meta.title) {
        routeLabel = route.meta.title
      } else {
        routeLabel = route.name
      }
      return routeLabel
    }
  }
}
</script>

<style lang="stylus">
.router-map {
  margin: 0;
  padding: 0;
  &:not(:last-child) { 
    padding-bottom: 20px;
  }
}
.router-item {
  margin: 0;
  padding: 0;
  &:not(:last-child) { 
    padding-bottom: 10px;
  }
}
.router-link {
  font-size: 16px;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
}
</style>

<template>
  <ul class="router-map" :class="{ 'root-router': isRoot }">
    <li
      v-for="(route, index) in $props.routes"
      :key="index"
      class="router-item"
      :style="{ textIndent: useIndent ? `${indent}px` : ''}">
      <router-link
        :to="getRouteFullPath(route)"
        @click.prevent="handleLink"
        :target="linkTarget"
        class="router-link"
        :class="{ 'active': $route.name === route.name }">
         {{ getRouteLabel(route) }}
      </router-link>
      <sub-router
        v-if="route.children"
        :depth="$props.depth+1"
        :routes="route.children"
        :useIndent="useIndent"
        :indent="$props.indent + $props.stepIndent * $props.depth"
        :link-target="linkTarget"
        :parent="route"
        :base-path="getSubBasePath(route)"
        :is-root="false"></sub-router>
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
    depth: {
      type: Number,
      default: 1
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
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  components: {
    SubRouter: () => import('./index')
  },
  methods: {
    getRouteFullPath (route) {
      if (this.isRoot) {
        return route.path
      } else {
        return `${this.basePath}/${route.path}`
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
    },
    getSubBasePath (route) {
      if (this.basePath === '') {
        return `${route.path}`
      } else {
        return `${this.basePath}/${route.path}`
      }
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

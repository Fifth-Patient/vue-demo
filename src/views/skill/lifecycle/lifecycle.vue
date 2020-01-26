<template>
  <div class="skill-lifecycle">
    <router-view></router-view>
    <div class="process-container" v-if="isShow">
      <p><button @click="handleClick">toggle show</button></p>
      <keep-alive>
        <lifecycle-process v-if="isShowProcess"></lifecycle-process>
        <div v-else>none</div>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import LifecycleProcess from './process'

export default {
  name: 'skill-lifecycle',
  components: {
    LifecycleProcess
  },
  data () {
    return {
      isShow: false,
      isShowProcess: false
    }
  },
  watch: {
    '$route' () {
      if (this.$route.query && this.$route.query.type) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  methods: {
    handleClick () {
      this.isShowProcess = !this.isShowProcess
    }
  },
  created () {
    if (this.$route.query && this.$route.query.type) {
      this.isShow = false
    } else {
      this.isShow = true
    }
  }
}
</script>

<template>
  <div class="demo-router-nav">
    <div class="router-container">
    <router-map
      v-if="isAllRouter"
      :use-indent="useIndent"
      :stepIndent="Number(stepIndent)"
      :link-target="linkTaget"></router-map>
    <router-map
      v-else
      :routes="currentRootRouters"
      :use-indent="useIndent"
      :stepIndent="Number(stepIndent)"
      :link-target="linkTaget"></router-map>      
    </div>
    <div class="router-control">
      <div>
        <input type="radio" v-model="isAllRouter" id="all-router" :value="true">
        <label for="all-router">全路由</label>
        <input type="radio" v-model="isAllRouter" id="current-router" :value="false">
        <label for="current-router">当前root路由</label>
      </div>
      <div>
        <input type="checkbox" id="use-index" v-model.number="useIndent">
        <label for="use-indent">层级缩进</label>
      </div>
      <div v-show="useIndent">
        <label for="step-indent">缩进像素</label>
        <input type="number" v-model="stepIndent" class="step-indent">
      </div>
      <div>
        打开方式
        <select v-model="linkTaget">
          <option disabled value="">请选择</option>
          <option value="_blank">新建窗口</option>
          <option value="_self">当前窗口</option>
          <option value="_parent">父级窗口</option>
          <option value="_top">顶层窗口</option>
        </select>
      </div>
    </div>

  </div>
</template>

<script>
import RouterMap from '@/components/router-map'

export default {
  name: 'views-demo-router-nav',
  components: {
    RouterMap
  },
  data () {
    return {
      isAllRouter: true,
      useIndent: true,
      stepIndent: 15,
      linkTaget: '_blank'
    }
  },
  computed: {
    currentRootRouters () {
      const currentRootPath = this.$route.matched[0].path
      return [ this.$router.options.routes.find(item => item.path ===  currentRootPath) ]
    }
  },
  watch: {
    useIndent () {
      if (!this.useIndent) {
        this.stepIndent = 0
      } else {
        this.stepIndent = 10
      }
    }
  }
}
</script>

<style>
.demo-router-nav {
  display: flex;
}
.demo-router-nav .router-container {
  flex: 1 1 300px;
}
.demo-router-nav .router-control {
  flex: 0 1 auto;
}
.demo-router-nav .router-control .step-indent {
  width: 50px;
}
</style>
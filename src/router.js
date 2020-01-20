import Vue from 'vue'
import VueRouter from 'vue-router'
import SkillLayout from './views/skill-layout.vue'
import DemoLayout from './views/demo-layout.vue'

Vue.use(VueRouter)

const rootRouter = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import('./views/index-layout.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('./views/index-layout.vue')
  }
]

const skillRouter = {
  path: '/skill',
  name: 'skill-views',
  meta: {
    title: 'vue技巧'
  },
  component: SkillLayout,
  children: [
    {
      path: 'ref-with-if',
      name: 'ref-with-if',
      component: () => import('./views/skill/ref-with-if')
    },
    {
      path: 'multi-index-1',
      name: 'multi-index-1',
      component: () => import('./views/skill/multi-index-vue/index-1')
    },
    {
      path: 'multi-index-2',
      name: 'multi-index-2',
      component: () => import('./views/skill/multi-index-vue/index-2')
    },
    {
      path: 'dollar-event',
      name: 'dollar-event',
      meta: {
        title: '$event'
      },
      component: () => import('./views/skill/dollar-event')
    },
    {
      path: 'control-panel',
      name: 'control-panel',
      meta: {
        title: '控制面板'
      },
      component: () => import('./views/skill/control-panel')
    },
    {
      path: 'two-way-binding-base-type',
      name: 'two-way-binding-base-type',
      meta: {
        title: '自定义双向绑定(基本类型)'
      },
      component: () => import('./views/skill/two-way-binding-base-type')
    },
    {
      path: 'two-way-binding-reference-type',
      name: 'two-way-binding-reference-type',
      meta: {
        title: '自定义双向绑定(引用类型)'
      },
      component: () => import('./views/skill/two-way-binding-reference-type')
    }
  ]
}

const demoRouter = {
  path: '/demo',
  name: 'demo-views',
  component: DemoLayout,
  meta: {
    title: 'vue demo'
  },
  children: [
    {
      path: 'router-nav',
      name: 'router-nav',
      meta: {
        title: '路由导航'
      },
      component: () => import('./views/demo/router-nav')
    }
  ]
}

const wildRouter = [
  {
    path: '*',
    name: 'wild',
    meta: {
      title: '无主之地'
    },
    component: () => import('./views/index-layout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...rootRouter,
    skillRouter,
    demoRouter,
    ...wildRouter
  ]
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import SkillLayout from './views/skill-layout.vue'
import DemoLayout from './views/demo-layout.vue'

Vue.use(VueRouter)

// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

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
    },
    {
      path: 'bus',
      name: 'bus',
      meta: {
        title: '非父子组件通讯(总线模式)'
      },
      component: () => import('./views/skill/bus')
    },
    {
      path: 'emitter',
      name: 'emitter',
      meta: {
        title: '非父子组件通讯(事件广播派发)'
      },
      component: () => import('./views/skill/emitter')
    },
    {
      path: 'lifecycle',
      name: 'lifecycle',
      meta: {
        title: '生命周期'
      },
      component: () => import('./views/skill/lifecycle'),
      children: [
        {
          path: 'el',
          name: 'lifecycle-el',
          meta: {
            title: '生命周期(el)'
          },
          beforeEnter: (to, from, next) => {
            // 没有type=el query参数，将会在该路由守卫加上
            if (to.query && !to.query.type) {
              to.query.type = 'el'
              next({
                name: to.name,
                query: {
                  type: 'el'
                }
              })
            }
            next()
          },
          component: () => import('./views/skill/lifecycle/mount')
        },
        {
          path: 'template',
          name: 'lifecycle-template',
          meta: {
            title: '生命周期(template)'
          },
          beforeEnter: (to, from, next) => {
            // 没有type=template query参数，将会在该路由守卫加上
            if (to.query && !to.query.type) {
              to.query.type = 'template'
              next({
                name: to.name,
                query: {
                  type: 'template'
                }
              })
            }
            next()
          },
          component: () => import('./views/skill/lifecycle/mount')
        },
        {
          path: 'render',
          name: 'lifecycle-render',
          meta: {
            title: '生命周期(render)'
          },
          beforeEnter: (to, from, next) => {
            // 没有type =render query参数，将会在该路由守卫加上
            if (to.query && !to.query.type) {
              to.query.type = 'render'
              next({
                name: to.name,
                query: {
                  type: 'render'
                }
              })
            }
            next()
          },
          component: () => import('./views/skill/lifecycle/mount')
        },
        {
          path: 'useful',
          name: 'lifecycle-useful',
          meta: {
            title: '生命周期(常用)'
          },
          beforeEnter: (to, from, next) => {
            // 没有type=useful query参数，将会在该路由守卫加上
            if (to.query && !to.query.type) {
              to.query.type = 'useful'
              next({
                name: to.name,
                query: {
                  type: 'useful'
                }
              })
            }
            next()
          },
          component: () => import('./views/skill/lifecycle/useful')
        }
      ]
    },
    {
      path: 'JSX-js',
      name: 'JSX(*.js)',
      component: async () => {
        const JSX = await import('./views/skill/JSX')
        if (JSX) {
          return JSX.JS
        }
      }
    },
    {
      path: 'JSX-vue',
      name: 'JSX(*.vue)',
      component: async () => {
        const JSX = await import('./views/skill/JSX')
        if (JSX) {
          return JSX.VUE
        }
      }
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
  mode: process.env.NODE_ENV === 'production'
    ? 'hash'
    : 'history',
  routes: [
    ...rootRouter,
    skillRouter,
    demoRouter,
    ...wildRouter
  ]
})

export default router

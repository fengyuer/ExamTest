import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/views/enter'
import '@/assets/common.scss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      component: Enter
    },
    {
      path: '/English',
      name: 'English',
      component: resolve => require(['@/views/English'], resolve)
    },
    {
      path: '/math',
      name: 'math',
      component: resolve => require(['@/views/math'], resolve)
    },
    {
      path: '/computer',
      name: 'computer',
      component: resolve => require(['@/views/computer'], resolve)
    },
    {
      path: '/daozhuangju',
      name: 'daozhuangju',
      component: resolve => require(['@/views/expand/English/daozhuangju'], resolve)
    }
  ]
})

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
    // //////////////////////////// 入学考试
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
    // //////////////////////////////// 2018年春
    {
      path: '/English1',
      name: 'English1',
      component: resolve => require(['@/views/2018Spring/english'], resolve)
    },
    {
      path: '/network1',
      name: 'network1',
      component: resolve => require(['@/views/2018Spring/network'], resolve)
    },
    {
      path: '/web1',
      name: 'web1',
      component: resolve => require(['@/views/2018Spring/web'], resolve)
    },
    {
      path: '/computer1',
      name: 'computer1',
      component: resolve => require(['@/views/2018Spring/computer'], resolve),
      children: [
        {
          path: '/ctest1',
          name: 'ctest1',
          component: resolve => require(['@/views/2018Spring/computer/11'], resolve)
        }
      ]
    },
    // //////// 拓展
    {
      path: '/daozhuangju',
      name: 'daozhuangju',
      component: resolve => require(['@/views/expand/English/daozhuangju'], resolve)
    }
  ]
})

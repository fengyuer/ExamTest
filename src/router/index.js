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
      component: resolve => require(['@/views/2018Spring/English'], resolve),
      children: [
        {
          path: '/eTest1',
          name: 'eTest1',
          component: resolve => require(['@/views/2018Spring/English/English01'], resolve)
        }, {
          path: '/eTest2',
          name: 'eTest2',
          component: resolve => require(['@/views/2018Spring/English/English02'], resolve)
        }, {
          path: '/eTest3',
          name: 'eTest3',
          component: resolve => require(['@/views/2018Spring/English/English03'], resolve)
        }, {
          path: '/eTest4',
          name: 'eTest4',
          component: resolve => require(['@/views/2018Spring/English/English04'], resolve)
        }, {
          path: '/eTest5',
          name: 'eTest5',
          component: resolve => require(['@/views/2018Spring/English/English05'], resolve)
        }, {
          path: '/eTest6',
          name: 'eTest6',
          component: resolve => require(['@/views/2018Spring/English/English06'], resolve)
        }
      ]
    },
    {
      path: '/network1',
      name: 'network1',
      component: resolve => require(['@/views/2018Spring/network'], resolve)
    },
    {
      path: '/web1',
      name: 'web1',
      component: resolve => require(['@/views/2018Spring/web'], resolve),
      children: [
        {
          path: '/wTest1',
          name: 'wTest1',
          component: resolve => require(['@/views/2018Spring/web/web01'], resolve)
        }, {
          path: '/wTest2',
          name: 'wTest2',
          component: resolve => require(['@/views/2018Spring/web/web02'], resolve)
        }, {
          path: '/wTest3',
          name: 'wTest3',
          component: resolve => require(['@/views/2018Spring/web/web03'], resolve)
        }
      ]
    },
    {
      path: '/computer1',
      name: 'computer1',
      component: resolve => require(['@/views/2018Spring/computer'], resolve),
      children: [
        {
          path: '/ctest13',
          name: 'ctest13',
          component: resolve => require(['@/views/2018Spring/computer/11'], resolve)
        }, {
          path: '/ctest14',
          name: 'ctest14',
          component: resolve => require(['@/views/2018Spring/computer/14'], resolve)
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

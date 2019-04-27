import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: () => import('./components/Layout.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('./views/Index.vue')
        },
        {
          path: '/page1',
          name: 'page1',
          component: () => import('./views/Page1.vue')
        },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('./views/Page2.vue')
        }
      ]
    }

  ]
})

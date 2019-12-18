import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tomato-clock',
      name: 'TomatoClock',
      component: () => import('./views/Tomato-Clock.vue'),
      children: [
        {
          path: 'todolist',
          name: 'TodoList',
          component: () => import('./components/TodoList.vue'),
        },
        {
          path: 'chart',
          name: 'Chart',
          component: () => import('./components/Chart.vue'),
        },
        {
          path: 'music',
          name: 'Music',
          component: () => import('./components/Music.vue'),
        }
      ],
    },
    {
      path: '/sss',
      name: 'sss',
      component: () => import('./views/sss.vue')
    }
  ]
})
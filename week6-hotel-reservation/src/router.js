import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/LOFT_Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import('./views/Rooms.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('./views/Book.vue')
    },
    {
      path: '/ok',
      name: 'ok',
      component: () => import('./views/OK.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue')
    },
    {
      path: '/testson',
      name: 'testson',
      component: () => import('./views/Test_son.vue')
    },
  ]
})

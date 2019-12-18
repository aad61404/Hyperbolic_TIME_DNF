import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import( './views/Login.vue')
    },
    {
      path: '/chatlist',
      name: 'chatlist',
      component: () => import('./views/ChatList.vue')
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: () => import('./views/ChatRoom.vue')
    },
  ]
})

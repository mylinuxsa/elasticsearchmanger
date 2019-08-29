import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/base/Home.vue' 
import Centent from '@/views/Centent.vue'
import Overview from '@/views/Overview.vue'
import nodes from '@/views/elasticsearch/nodes.vue'
import Login from '@/views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/',
      name: '',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home,
      children: [
        {
          path: 'elasticsearch/nodes',
          component: nodes
        },
        {
          path: 'overview',
          component: Overview
        }
      ]
    }
  ]
})

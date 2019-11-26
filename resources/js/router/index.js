import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import home from '../pages/home.vue'
import about from '../pages/about.vue'
import analytics from '../dashboard/analytics.vue'
import ecomerces from '../dashboard/ecomerces.vue'
import index from '../dashboard/index.vue'


let Admin = ['Admin'];


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Home',
      }

    },
    {
      path: '/analytics',
      name: 'analytics',
      component: analytics,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Analytics',
      }

    },
    
    {
      path: '/ecomerces',
      name: 'ecomerces',
      component: ecomerces,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'E-comerces',
      }

    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Index',
      }

    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'About',
      }

    },
  ]

});
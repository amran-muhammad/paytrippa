import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import home from '../pages/home.vue'
import about from '../pages/about.vue'
import analytics from '../dashboard/analytics.vue'
import ecomerces from '../dashboard/ecomerces.vue'
import index from '../dashboard/index.vue'
import projects from '../dashboard/projects.vue'
import widgets from '../widgets/widgets.vue'
import maps from '../widgets/maps.vue'
import inbox from '../email/inbox.vue'
import compose from '../email/compose.vue'
import sent from '../email/sent.vue'
import trash from '../email/trash.vue'
import draft from '../email/draft.vue'
import todo from '../todo/todo.vue'
import chat from '../chat/chat.vue'
import employeelist from '../employee/employeelist.vue'
import employeedetails from '../employee/employeedetails.vue'
import contactlist from '../contact/contactlist.vue'
import contactdetails from '../contact/contactdetails.vue'
import profile from '../profile/profile.vue'
import product from '../ecomerce/product.vue'
import productlist from '../ecomerce/productlist.vue'
import productpage from '../ecomerce/productpage.vue'
import paymentdetails from '../ecomerce/paymentdetails.vue'
import invoice from '../ecomerce/invoice.vue'


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
      path: '/todo',
      name: 'todo',
      component: todo,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'todo',
      }

    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'chat',
      }

    },
    {
      path: '/employeelist',
      name: 'employeelist',
      component: employeelist,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'employeelist',
      }

    },
    {
      path: '/employeedetails',
      name: 'employeedetails',
      component: employeedetails,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'employeedetails',
      }

    },
    {
      path: '/contactlist',
      name: 'contactlist',
      component: contactlist,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'contactlist',
      }

    },
    {
      path: '/contactdetails',
      name: 'contactdetails',
      component: contactdetails,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'contactdetails',
      }

    },
    
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'profile',
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
      path: '/inbox',
      name: 'inbox',
      component: inbox,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Email-inbox',
      }

    },
    {
      path: '/compose',
      name: 'compose',
      component: compose,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Email-compose',
      }

    },
    {
      path: '/sent',
      name: 'sent',
      component: sent,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Email-sent',
      }

    },
    {
      path: '/trash',
      name: 'trash',
      component: trash,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Email-trash',
      }

    },
    {
      path: '/draft',
      name: 'draft',
      component: draft,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Email-draft',
      }

    },
    
    {
      path: '/projects',
      name: 'projects',
      component: projects,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Projects',
      }

    },
    {
      path: '/widgets',
      name: 'widgets',
      component: widgets,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Widgets',
      }

    },
    {
      path: '/maps',
      name: 'maps',
      component: maps,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Maps',
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
      path: '/product',
      name: 'product',
      component: product,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Product',
      }

    },
    {
      path: '/productpage',
      name: 'productpage',
      component: productpage,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Product Page',
      }

    },
    {
      path: '/productlist',
      name: 'productlist',
      component: productlist,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Product List',
      }

    },
    {
      path: '/paymentdetails',
      name: 'paymentdetails',
      component: paymentdetails,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Payment Details',
      }

    },
    {
      path: '/invoice',
      name: 'invoice',
      component: invoice,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'Invoice',
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
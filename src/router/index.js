import Vue from 'vue'
import VueRouter from 'vue-router'
import extraRoute from './extra-route.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/parent/good',
    component: () => import('../views/parent/good/GoodParent.vue'),
    children: [
      {
        path: 'one',
        name: 'GoodParentChildOne',
        component: () => import('../views/parent/good/GoodParentChildOne.vue')
      },
      {
        path: 'two',
        name: 'GoodParentChildTwo',
        component: () => import('../views/parent/good/GoodParentChildTwo.vue')
      }
    ]
  },
  {
    path: '/parent/bad',
    component: () => import('../views/parent/bad/BadParent.vue'),
    children: [
      {
        path: 'one',
        name: 'BadParentChildOne',
        component: () => import('../views/parent/bad/BadParentChildOne.vue')
      },
      {
        path: 'two',
        name: 'BadParentChildTwo',
        component: () => import('../views/parent/bad/BadParentChildTwo.vue')
      }
    ]
  },
  {
    path: '/parent/none',
    children: [
      {
        path: 'child',
        name: 'NoParentChild',
        component: () => import('../views/parent/none/NoParentChild.vue')
      }
    ]
  },
  extraRoute
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

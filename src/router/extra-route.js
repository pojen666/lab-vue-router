const route = {
    path: '/parent/extra',
    component: () => import('../views/parent/extra/ExtraParent.vue'),
    children: [
      {
        path: 'child',
        name: 'ExtraParentChild',
        component: () => import('../views/parent/extra/ExtraParentChild.vue')
      }
    ]
  }

export default route;
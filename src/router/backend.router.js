export default [
  {
    path: '/',
    name: 'dashboard-analytics',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Home',
      breadcrumb: [
        {
          text: 'Home',
          active: true,
        },
      ],
    },
  },
  {
    path: '/print',
    name: 'print-queues',
    component: () => import('@/views/Printqueues.vue'),
    meta: {
      pageTitle: 'Print queues',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/error/Error404.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/view/:id',
    name: 'view',
    component: () => import('@/views/View.vue'),
  },
  {
    path: '/printer/:id',
    name: 'printer',
    component: () => import('@/views/Printer.vue'),
  },
  {
    path: '/pointsetting',
    name: 'pointsetting',
    component: () => import('@/views/PointSetting.vue'),
  },
  {
    path: '/paymentsetting',
    name: 'paymentsetting',
    component: () => import('@/views/PaymentSetting.vue'),
  },
  {
    path: '/paymentsetting/edit',
    name: 'editsetting',
    component: () => import('@/views/EditSetting.vue'),
  },
  
  {
    path: '*',
    redirect: 'error-404',
  },
]


const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '/', redirect: '/mapa' },
      { path: '/mapa', component: () => import('pages/MapPage.vue') },
      { path: '/reservas', component: () => import('pages/BookingPage.vue') },
      { path: '/chat', component: () => import('pages/chatPage.vue') },
      { path: '/cuenta', component: () => import('pages/AccountPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
            import('@/views/Login.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () =>
      import('@/views/Add.vue')
  }
]
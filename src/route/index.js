import Home from '@/views/Home.vue'

export default [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/add',
  name: 'add',
  component: () =>
      import('@/views/Add.vue')
}
]
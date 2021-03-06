import Home from '@/views/Home.vue'

export default [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/about',
  name: 'about',
  component: () =>
      import('@/views/About.vue')
},
{
  path: '/add',
  name: 'add',
  component: () =>
      import('@/views/Add.vue')
}
]
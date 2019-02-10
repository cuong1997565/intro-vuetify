import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import Product from '@/components/Product'
import Test from '@/components/Test'
import Bai2 from '@/components/Bai2'
import Bai3 from '@/components/Bai3'
import Bai4 from '@/components/Bai4'
import Login from '@/components/AppLogin'
import Contact from '@/components/AppContact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/products',
      name: 'Product',
      component: Product
    },
    {
      path: '/test',
      name: 'test',
      component:Test
    },
    {
      path: '/bai2',
      name: 'bai2',
      component:Bai2
    },
    {
      path: '/bai3',
      name: 'bai3',
      component: Bai3
    },
    {
      path: '/bai4',
      name: 'bai4',
      component: Bai4
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
 {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

  ]
})

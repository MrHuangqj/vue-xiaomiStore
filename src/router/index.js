import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page/home-page'
import Sort from '@/components/sort/sort'
import Discover from '@/components/discover/discover'
import Car from '@/components/car/car'
import Order from '@/components/order/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/order',
      component: Order
    }
  ]
})

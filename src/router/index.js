import Vue from 'vue'
import VueRouter from 'vue-router'
import FoodMenuOne from '../views/FoodMenuOne.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FoodMenuOne',
    component: FoodMenuOne
  },
  {
    path: '/foodmenutwo',
    name: 'FoodMenuTwo',
    component: () => import('../views/FoodMenuTwo.vue')
  },
  {
    path: '/foodmenuthree',
    name: 'FoodMenuThree',
    component: () => import('../views/FoodMenuThree.vue')
  },
  {
    path: '/drinkmenu',
    name: 'DrinkMenu',
    component: () => import('../views/DrinkMenu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

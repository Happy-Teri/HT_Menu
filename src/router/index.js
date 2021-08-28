import Vue from 'vue'
import VueRouter from 'vue-router'
import FavoritesMenu from '../views/FavoritesMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FavoritesMenu',
    component: FavoritesMenu
  },
  {
    path: '/noodlescombossides',
    name: 'NoodlesCombosSides',
    component: () => import('../views/NoodlesCombosSides.vue')
  },
  {
    path: '/lunchspecials',
    name: 'LunchSpecials',
    component: () => import('../views/LunchSpecials.vue')
  },
  {
    path: '/bubbletea',
    name: 'BubbleTea',
    component: () => import('../views/BubbleTea.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

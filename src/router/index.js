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
  },
  {
    path: '/build/favoritesmenu',
    name: 'FavoritesMenuBuild',
    component: () => import('../views/FavoritesMenuBuild.vue')
  },
  {
    path: '/build/noodlescombossides',
    name: 'NoodlesCombosSidesBuild',
    component: () => import('../views/NoodlesCombosSidesBuild.vue')
  },
  {
    path: '/build/lunchspecials',
    name: 'LunchSpecialsBuild',
    component: () => import('../views/LunchSpecialsBuild.vue')
  },
  {
    path: '/build/bubbletea',
    name: 'BubbleTeaBuild',
    component: () => import('../views/BubbleTeaBuild.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tr from "@/i18n/translation"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale?',
      name: 'home',
      beforeEnter: Tr.routeMiddleware,
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },

    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    }
  ]
})

export default router

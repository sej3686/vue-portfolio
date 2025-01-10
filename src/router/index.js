import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},

    {path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue')},

    {path: '/wip', name: 'wip', component: () => import('../views/WIPView.vue')},
  ],
  scrollBehavior (to, from, savedPosition) {
    return { top: 0};
  }
})

export default router

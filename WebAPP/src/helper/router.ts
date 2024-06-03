import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/pages/home.vue'
import eCommerce from '@/components/pages/eCommerce.vue'
import risorse from '@/components/pages/risorse.vue'
import piani from '@/components/pages/piani.vue'
import lottie from '@/components/pages/lottie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/caratteristiche-piattaforma-ecommerce',
      name: 'eCommerce',
      component: eCommerce
    },
    {
      path: '/supporto',
      name: 'risorse',
      component: risorse
    },
    {
      path: '/piani',
      name: 'piani',
      component: piani
    },
    {
      path: '/5',
      name: 'lottie',
      component: lottie
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

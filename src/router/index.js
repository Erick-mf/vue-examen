import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AdminView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    router.push('/admin')
  }
})
router.beforeEach((to, _, next) => {
  const user = getAuth().currentUser
  if (!user && to.meta.requiresAuth) {
    next('/')
  } else {
    next()
  }
})
export default router

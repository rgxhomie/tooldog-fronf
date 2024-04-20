import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@/stores";
import LandingView from '@/views/public/LandingView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'
import LogInView from '@/views/auth/LogInView.vue'
import DashboardView from "@/views/protected/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
    *   PUBLIC ROUTES
    */
    {
      path: '/',
      name: 'Landing',
      component: LandingView
    },

    /*
    *   AUTH ROUTES
    */
    {
      path: '/login',
      name: 'Log In',
      component: LogInView
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUpView
    },

    /*
    *   PROTECTED ROUTES
    */

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    },

    /*
    *   SERVICE ROUTES
    */
    {
      path: '/404',
      name: 'Not Found',
      component: () => import('@/views/common/NotFoundView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'Redirect',
      redirect: '/404'
    }
  ]
})

router.beforeEach(async to => {
  const publicPages = ['/login', '/404', '/signup', '/'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();
  
  if (authRequired && !auth.isAuth) return '/login';

  if (authRequired && auth.isAuth) {
    auth.refresh();
  }
})

export default router

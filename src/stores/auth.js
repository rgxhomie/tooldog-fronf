import { defineStore } from 'pinia'
import { authService } from '@/services';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    access_token: window.localStorage.getItem('access_token'),
    refresh_token: window.localStorage.getItem('refresh_token')
  }),
  getters: {
    isAuth() {
      return this.access_token && this.refresh_token;
    }
  },
  actions: {
    logout () {
      authService.logOut(this.refresh_token);

      this.access_token = null;
      this.refresh_token = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');

      router.push('/');
    },

    async refresh () {
      try {
        const { access_token } = await authService.refresh(this.refresh_token);
      
        if (!access_token) throw new Error('No token obtained');

        this.access_token = access_token;
        window.localStorage.setItem('access_token', access_token)
      } catch (error) {
        router.push('/login')
      }
    },

    async login (username, password) {
      const { access_token, refresh_token } = await authService.login(username, password);

      this.access_token = access_token;
      this.refresh_token = refresh_token;

      window.localStorage.setItem('access_token', access_token);
      window.localStorage.setItem('refresh_token', refresh_token);

      router.push('/dashboard');
    },

    async signup (username, email, password) {
      const { access_token, refresh_token } = await authService.login(username, email, password);

      this.access_token = access_token;
      this.refresh_token = refresh_token;

      window.localStorage.setItem('access_token', access_token);
      window.localStorage.setItem('refresh_token', refresh_token);

      router.push('/dashboard');
    }
  },
})

import axios from 'axios';
import { fp } from '@/utils';
import { useAuthStore } from '@/stores';

const $http = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        'fp': fp()
    }
});

$http.interceptors.request.use(function (config) {
    const auth = useAuthStore();
    config.headers.setAuthorization(`Bearer ${auth.access_token}`);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

$http.interceptors.response.use(function (response) {
    // 2xx
    return response;
  }, function (error) {
    if (error.response?.status === 401) {
      const auth = useAuthStore();

      auth.refresh();
    }
    return Promise.reject(error);
  });

export default $http;

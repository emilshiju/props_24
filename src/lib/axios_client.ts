
import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://props-24.vercel.app/api',
});

axiosClient.interceptors.request.use(
  (config) => {
    // Add authorization token or other headers
    config.headers['Authorization'] = 'Bearer your_token_here';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosClient;
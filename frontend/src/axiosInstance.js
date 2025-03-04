// src/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3306/api', // Replace with your API base URL
  timeout: 10000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
    // Add any custom headers if needed
  }
});

// Add a request interceptor if needed
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    // For example, add authentication token to headers
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor if needed
axiosInstance.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;

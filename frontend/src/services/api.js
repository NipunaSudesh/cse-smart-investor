'use client';

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1'
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const stocksApi = {
  search: (query) => api.get('/stocks', { params: { search: query } }),
  get: (symbol) => api.get(`/stocks/${symbol}`),
  prices: (symbol) => api.get(`/stocks/${symbol}/prices`),
  technicals: (symbol) => api.get(`/stocks/${symbol}/technicals`),
  analysis: (symbol) => api.get(`/stocks/${symbol}/analysis`)
};

export const authApi = {
  login: (payload) => api.post('/auth/login', payload),
  register: (payload) => api.post('/auth/register', payload)
};

export default api;
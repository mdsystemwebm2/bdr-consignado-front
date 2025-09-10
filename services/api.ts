import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://bdrconsignados.mdsw.shop/api', // ou sua URL de produção
});

// Interceptor para injetar o token em todas as requisições
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// export const api = axios.create({
//   baseURL: "https://bdrconsignados.mdsw.shop/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

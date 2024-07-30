import { axios } from 'axios'

const service = axios.create({
  baseUrl: '/api',
  timeout: 8000,
  withCredentials: true
})

/**
 * 请求拦截器
 */
service.interceptors.request.use((config) => {
  return config
})

/**
 * 相应拦截器
 */
service.interceptors.response.use((response) => {
  return response.content
})
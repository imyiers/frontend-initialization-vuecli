import { storeToRefs } from 'pinia'
import { userStore } from '@/store'
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
  const user = userStore()
  const { userToken } = storeToRefs(user)
  if (userToken.accessToken) {
    config.headers.Authorization = `Bearer ${userToken.accessToken}`
  }
  return config
})

/**
 * 相应拦截器
 */
service.interceptors.response.use((response) => {
  const { code, message } = response
  if (code === 10401) {
    // 登录过期处理
    return response.content
  }

  return response.content
})
import { setBrowserTitle } from '@/plugins/browser-title'
import { createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: []
})

/**
 * 路由拦截 - 前
 */
router.beforeEach((_to, _from, next) => {
  next()
})
/**
 * 路由拦截器 - 后
 */
router.afterEach((_to, _from) => {
  setBrowserTitle(_to.meta?.title)
})

export default router

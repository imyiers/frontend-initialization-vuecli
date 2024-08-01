
/**
 * 用户登录
 * @param {object} data 
 */
export function userLogin(data) {
  service.post('/user/login', data, {
    params: { ts: new Date().getTime(), sign: localStorage.getItem('hualinft-sign') }
  })
}

/**
 * 用户注销
 */
export function userLogout() {
  service.post('/user/logout', null, {
    params: { ts: new Date().getTime() }
  })
}

/**
 * 获得用户路由
 */
export function getRoutes() {
  service.post('/user/routes', { sign: null, mid: null }, {
    params: { ts: new Date().getTime() }
  })
}
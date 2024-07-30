
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
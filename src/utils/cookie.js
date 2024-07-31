import Cookie from 'js-cookie'

/**
 * 设置Cookie
 * @param {string} name 
 * @param {string} value 
 */
function setCookie(name, value) {
  Cookie.set(name, value);
}

/**
 * 获得Cookie
 * @param {string} name 
 */
function getCookie(name) {
  return Cookie.get(name);
}

/**
 * 删除Cookie
 * @param {string} name 
 */
function delCookie(name) {
  Cookie.delete(name);
}
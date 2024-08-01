/**
 * 防抖函数
 * @param {Function} fn 
 * @param {number} delay 
 * @returns 
 */
export default function debounce(fn, delay = 500) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
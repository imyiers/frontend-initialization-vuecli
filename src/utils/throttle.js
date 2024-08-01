/**
 * 节流函数
 * @param {Function} fn 
 * @param {number} delay 
 * @returns 
 */
export default function throttle(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
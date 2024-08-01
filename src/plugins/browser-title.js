/**
 * 设置浏览器标题
 * @param {string} title 
 */
export const setBrowserTitle = (title) => {
  const names = []
  if (title) {
    names.push(title)
  }
  document.title = names.join(' - ')
}

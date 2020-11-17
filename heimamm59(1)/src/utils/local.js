// 用于存储token等处理
function saveLocal (value, key = 'token') {
  window.localStorage.setItem(key, value)
}
// 获取
function getLocal (key = 'token') {
  return window.localStorage.getItem(key)
}
//删除
function removeLocal (key = 'token') {
  window.localStorage.removeItem(key)
}
export { saveLocal, getLocal, removeLocal }

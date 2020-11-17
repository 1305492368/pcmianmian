import _fetch from './request.js'
// import { getLocal } from '@/utils/local.js'
// 退出
function logout () {
  return _fetch({
    url: '/logout'
    // 请求头
    // headers: {
    //   token: getLocal('token')
    // }
  })
}
// 获取用户信息
function getInfo () {
  return _fetch({
    url: '/info'
    // 请求头
    // headers: {
    //   token: getLocal('token')
    // }
  })
}
export { logout, getInfo }

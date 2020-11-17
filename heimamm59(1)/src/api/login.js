import _fetch from './request'

// 定义一个登陆api

function toLogin (data) {
  return _fetch({
    url: '/login',
    method: 'post',
    data: data
  })
}
export { toLogin }

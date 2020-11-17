import _fetch from './request.js'
// 列表
function getUserListList (params) {
  return _fetch({
    url: '/user/list',
    params
  })
}
//状态设置
function setUserListStatus (data) {
  return _fetch({
    url: '/user/status',
    method: 'post',
    data
  })
}
// 添加
function addUserList (data) {
  return _fetch({
    url: '/user/add',
    method: 'post',
    data
  })
}
// 编辑
function editUserList (data) {
  return _fetch({
    url: '/user/edit',
    method: 'post',
    data
  })
}
// 删除
function delUserList (data) {
  return _fetch({
    url: '/user/remove',
    method: 'post',
    data
  })
}
export {
  getUserListList,
  setUserListStatus,
  addUserList,
  editUserList,
  delUserList
}

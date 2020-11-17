import _fetch from './request.js'
// 列表
function getBusinessList (params) {
  return _fetch({
    url: '/enterprise/list',
    params
  })
}
//状态设置
function setBusinessStatus (data) {
  return _fetch({
    url: '/enterprise/status',
    method: 'post',
    data
  })
}
// 添加
function addBusiness (data) {
  return _fetch({
    url: '/enterprise/add',
    method: 'post',
    data
  })
}
// 编辑
function editBusiness (data) {
  return _fetch({
    url: '/enterprise/edit',
    method: 'post',
    data
  })
}
// 删除
function delBusiness (data) {
  return _fetch({
    url: '/enterprise/remove',
    method: 'post',
    data
  })
}
export {
  getBusinessList,
  setBusinessStatus,
  addBusiness,
  editBusiness,
  delBusiness
}

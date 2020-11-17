import _fetch from './request.js'
// 获取列表
function questionList (params) {
  return _fetch({
    url: '/question/list',
    params
  })
}
// 状态设置
function questionStatus (data) {
  return _fetch({
    url: '/question/status',
    method: 'post',
    data
  })
}
// 新增
function toQuestionAdd (data) {
  return _fetch({
    url: '/question/add',
    method: 'post',
    data
  })
}
// 编辑
function questionEdit (data) {
  return _fetch({
    url: '/question/edit',
    method: 'post',
    data
  })
}
// 删除
function questionRemove (data) {
  return _fetch({
    url: '/question/remove',
    method: 'post',
    data
  })
}
export {
  questionList,
  questionStatus,
  toQuestionAdd,
  questionEdit,
  questionRemove
}

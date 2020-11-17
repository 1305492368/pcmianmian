import _fetch from './request.js'
// 获取学科列表
function subjectList (params) {
  return _fetch({
    url: '/subject/list',
    params
  })
}
// 状态设置
function subjectStatus (data) {
  return _fetch({
    url: '/subject/status',
    method: 'post',
    data
  })
}
// 新增学科
function toSubjectAdd (data) {
  return _fetch({
    url: '/subject/add',
    method: 'post',
    data
  })
}
// 删除学科
function subjectRemove (data) {
  return _fetch({
    url: '/subject/remove',
    method: 'POST',
    data
  })
}
// 编辑学科
function subjectEdit (data) {
  return _fetch({
    url: '/subject/edit',
    method: 'post',
    data
  })
}

export { subjectList, subjectStatus, toSubjectAdd, subjectRemove, subjectEdit }

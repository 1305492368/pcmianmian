import _fetch from './request.js'
function dataTitle () {
  return _fetch({
    url: '/data/title',
    method: 'post'
  })
}

// 获取图表数据
function dataStatistics () {
  return _fetch({
    url: '/data/statistics',
    method: 'post'
  })
}

export { dataTitle, dataStatistics }

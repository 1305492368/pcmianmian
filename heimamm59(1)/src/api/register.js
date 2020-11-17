import _fetch from './request.js'

// 定义api方法
function getCodeApi (data) {
  return _fetch({
    url: '/sendsms',
    method: 'post',
    data: data,
    withCredentials: true //跨域带cookie到后端
  })
}
// 注册
function toRegister (data) {
  return _fetch({
    url: '/register',
    method: 'post',
    data
  })
}

export { getCodeApi, toRegister }
// export default { getCodeApi }
// export { getCodeApi }
// export { test }
// export   import使用他们之间就是解构赋值
// export {暴露出去}   import  {getCodeApi}  from "路径"
//                             {getCodeApi}   =    { getCodeApi }
// 需要暴露多个东西出去时优先使用export ,只需要暴露一个东西时使用export default
//export default一个js只能使用一个,export可以写多个

// 解构赋值
/*
   let {a,b}={a:10,b:20}
   a=10
   b=20
   let {c,d}={a:10,d:20}
   c:nudfend
   d:20
   {e=200,f}={e:undefined,f:5}
   e:200
   f:5
*/

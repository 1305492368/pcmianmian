// 使用axios
import axios from 'axios'
// 引入 message
import { Message } from 'element-ui' //Message相当于this.$message
import { getLocal, removeLocal } from '@/utils/local.js'
// 导入路由实例对象
import router from '@/router/index.js'
// 创建axios副本(修改axios的默认值)
const _fetch = axios.create({
  baseURL: process.env.VUE_APP_URL,
  withCredentials: true
})
// 添加请求拦截器
_fetch.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // window.console.log('请求拦截', config)
    config.headers.token = getLocal()
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
// 11
_fetch.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // window.console.log('响应拦截', response)
    if (response.data.code == 200) {
      return response
    } else if (response.data.code == 206) {
      //提示一下
      Message.error(response.data.message)
      //清除token
      removeLocal('token')
      //跳转至登陆页   this.$router===router的实例对象
      router.push('/login')
      // 不是200情况.,我们都不希望.then再执行,直接让它跳转到.catch
      return Promise.reject(response.data.message)
    } else {
      Message.error(response.data.message)
      // alert(response.data.message)
      // return undefined
      // 不是200情况.,我们都不希望.then再执行,直接让它跳转到.catch
      return Promise.reject(response.data.message)
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default _fetch

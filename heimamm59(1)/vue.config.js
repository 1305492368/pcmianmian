module.exports = {
  // 1:将.env.development  内的基地址替换为  /public
  //2复制下面配制

  publicPath: './',
  devServer: {
    proxy: {
      //跨域:不同源  客户端请求服务端
      '/public': {
        //这里最好有一个 /
        target: 'http://127.0.0.1/heimamm', // 后台接口域名  http://127.0.0.1/heimamm/public/uploads  真实接口地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          //   '/public': ''
        }
      }
    }
  }
}

// const proxy = require('http-proxy-middleware');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        //要访问的跨域的域名
        target: 'http://localhost:3000',
        ws: true,
        secure: false, // 使用的是http协议则设置为false，https协议则设置为true
        changOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "src/styles/main.scss";
                @import "src/styles/variables.scss";
            `,
      },
    },
  },
};

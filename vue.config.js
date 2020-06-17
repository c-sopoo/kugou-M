const path = require('path')
const axios = require('axios')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      'api': {
        target:'http://m.kugou.com',
        secure: false, // https: true  http:// false
        changeOrigin: true, // 当前是跨域访问  要设置
        pathRewrite: {
          '^/api': ''
        }
      },
      'songinfo': {
        target: 'http://www.kugou.com',
        secure: false, // https: true  http:// false
        changeOrigin: true, // 当前是跨域访问  要设置
        pathRewrite: {
          '^/songinfo': ''
        },
      }
    },
    before(app) {
      // app.get('/', (req, res) => {
      //   let url = 'http://m.kugou.com/?json=true'
      //   axios.get(url).then(response => {
      //     // console.log(JSON.parse(response.data))
      //     res.json(response)
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // })
      
    }
  },
  css: {
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16,
            propList: ['*'],
          })
        ]
      }
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
  }
}
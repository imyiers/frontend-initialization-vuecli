const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const { AntDesignVueResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (setting) => {
    setting.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
          })
        ]
      })
    ]
  },
  devServer: {
    host: '127.0.0.1',
    port: 3030,
    proxy: {
      '/api': {
        target: 'http://localhost:3080',
        changeOrigin: true
      }
    }
  }
})

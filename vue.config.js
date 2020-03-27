const path = require('path')

module.exports = {
  // runtimeCompiler: true, // only need runtime
  publicPath: process.VUE_APP_PUBLIC_PATH,
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: config => {
    /**
     * 删除 dist/index.html 标签的 preload prefetch 属性
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     */
    config.plugin('preload')
    config.plugin('prefetch')
    /**
     * 自动化导入stylus
     * https://cli.vuejs.org/zh/guide/css.html#自动化导入
     */
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variable.styl'),
      ],
    })
}

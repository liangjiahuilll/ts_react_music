// cracoLess.config.js: 用于扩展和自定义通过 Create React App 创建的 React 项目的默认配置
const path = require('path')
const Cracoless = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: Cracoless }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}

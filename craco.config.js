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

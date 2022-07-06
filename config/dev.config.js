const { merge } = require('webpack-merge')
const baseConfig = require('./base.config.js')

const config = {
  mode: 'development',
}

const devConfig = merge(baseConfig, config)
module.exports = devConfig

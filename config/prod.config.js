const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./base.config.js')
const CopyPlugin = require('copy-webpack-plugin')

const config = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/ga-tracker.d.ts', to: 'ga-tracker.d.ts' }]
    })
  ]
}

const prodConfig = merge(baseConfig, config)
module.exports = prodConfig

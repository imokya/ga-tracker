const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./base.config.js')
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin')

const config = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new TypescriptDeclarationPlugin({
      out: 'g-tracker.d.ts'
    })
  ]
}

const prodConfig = merge(baseConfig, config)
module.exports = prodConfig

const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'ga-tracker.js',
    path: path.resolve(__dirname, '../dist'),
    library: {
      name: 'gaTracker',
      export: 'default',
      type: 'umd'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebapckPlugin({
      inject: false,
      scriptLoading: 'blocking',
      minify: false,
      template: './index.html'
    })
  ]
}

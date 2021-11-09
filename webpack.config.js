const path = require('path')
const src = __dirname + "/src"
const dist = __dirname + "/dist"
const webpack = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'development' : 'production',
  target: 'node',
  context: src,
  entry: {
    'main': './index.js'
  },
  output: {
		globalObject: 'self',
    filename: './[name].bundle.js',
    sourceMapFilename: './map/[id].[chunkhash].js.map',
    chunkFilename: './chunk/[id].[chunkhash].js',
    path: dist
  },
  plugins: [
  ]
}
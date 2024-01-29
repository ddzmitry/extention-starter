const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

// will make JS files smaler and compress as much as possible
module.exports = merge(common, {
  mode: 'production',
})

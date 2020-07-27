const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  watch: false,
  mode: 'development',
  performance: { hints: false },
  devtool: 'inline-source-map'
});
const { client } = require('universal-webpack/config')
const settings = require('./universal-webpack-settings')
const configuration = require('./webpack-dev.config')
 
module.exports = client(configuration, settings);
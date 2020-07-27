const { server } = require('universal-webpack/config')
const settings = require('./universal-webpack-settings')
const configuration = require('./webpack-dev.config')
 
module.exports = server(configuration, settings);
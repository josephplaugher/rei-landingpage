var startServer = require('universal-webpack/server')
var settings = require('./../universal-webpack-settings')
// `configuration.context` and `configuration.output.path` are used
var configuration = require('../webpack-prod.config')

startServer(configuration, settings)

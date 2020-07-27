import ReactDOMServer from 'react-dom/server'
import React from 'react'
import express from 'express'
import bodyParser from 'body-parser'
import Routes from './client/Routes'
import { StaticRouter, matchPath } from 'react-router-dom'
import App from './client/App'
import SetUrl from 'ServerUtil/SetUrl'
import InquiryCont from './server/controllers/InquiryCont'

export default function() {
    const app = express()

    app.use(express.static('public'))
    app.set('view engine', 'ejs')
    app.set('views', './src/views')
    app.disable('view cache')

    let port = process.env.PORT
    app.listen(port, function() {
        console.log(
            'server started in ' +
                process.env.NODE_ENV +
                ' mode on port ' +
                port
        )
    })

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', SetUrl())
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS')
        res.header(
            'Access-Control-Allow-Headers',
            'Content-Type, authorization'
        )
        res.set('X-Powered-By', 'Appreciate Corporation')
        next()
    })

    app.use(bodyParser.urlencoded({ extended: false })) // Parse application/x-www-form-urlencoded
    app.use(bodyParser.json()) // Parse application/json

    app.use('/', InquiryCont)

    app.get('*', (req, res, next) => {
        const AppString = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{ data: 'context' }}>
                <App />
            </StaticRouter>
        )
        res.render('index', { App: AppString })
    })
}

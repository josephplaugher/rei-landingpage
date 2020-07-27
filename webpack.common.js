const path = require('path')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/client.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },
    plugins: [
        new Dotenv(),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|mjs)$/,
                exclude: /node_modules/, //keeping react files around, but we're not going to use them for now
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false } },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            Util: path.resolve(__dirname, 'src/client/Util/'),
            scss: path.resolve(__dirname, 'src/client/scss/'),
            ServerUtil: path.resolve(__dirname, 'src/server/ServerUtil/'),
        },
    },
}

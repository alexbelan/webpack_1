const { merge } = require('webpack-merge')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 4000,
        hot: true,
        open: true
    },
    plugins: [new ESLintPlugin({
        overrideConfigFile: path.resolve(__dirname, '.eslintrc.js')
    })],
})
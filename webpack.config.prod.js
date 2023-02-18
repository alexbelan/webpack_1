const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin")
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
})
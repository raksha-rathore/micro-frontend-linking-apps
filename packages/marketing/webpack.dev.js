const { merge } = require ('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const {ModuleFederationPlugin} = require('webpack').container;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarkettingApp': './src/bootstrap.js'
            }
        })
    ]
}

module.exports =  merge(commonConfig, devConfig)
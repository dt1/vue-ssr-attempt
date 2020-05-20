const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const baseConfig = require('./webpack.base.config.js')
const path = require('path');
const srcPath = path.resolve(process.cwd(), 'src');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = merge(baseConfig, {
    entry: {
        app: path.join(srcPath, 'entry-client.js')
    },

    output: {
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: '/public',
        filename: isProduction ? '[name].[hash].js' : '[name].js',
        sourceMapFilename: isProduction ? '[name].[hash].js.map' : '[name].js.map',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: !isProduction } },
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue'],
    },

    plugins: (isProduction ?
              [
                  new MiniCssExtractPlugin({
                      filename: '[name].[contenthash].css',
                  }),
              ] : [
                  new MiniCssExtractPlugin({
                      filename: '[name].css',
                      hmr: true,
                  }),
                  new webpack.HotModuleReplacementPlugin(),
              ]
             )
})

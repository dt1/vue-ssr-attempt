const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const srcPath = path.resolve(process.cwd(), 'src');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[path][name].[hash:7].[ext]',
                            context: srcPath
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};

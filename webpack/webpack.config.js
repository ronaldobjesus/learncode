/**
 * @author    Zanisk
 * @version   1.0.0
 * @copyright Since 2023 Zanisk
 */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let config = {
    entry: {
        theme: ['./js/theme.js', './css/theme.scss'],
        error: ['./css/error.scss'],
    },
    output: {
        path: path.resolve(__dirname, '../assets/js'),
        filename: '[name].js',
    },
    resolve: {
        preferRelative: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'esbuild-loader',
            },
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /.(png|woff(2)?|eot|otf|ttf|svg|gif)(\?[a-z0-9=./]+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: '../css/[hash][ext]',
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: path.join('..', 'css', '[name].css')}),
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            extractComments: false,
          }),
        ],
    };
}

module.exports = config;

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const webpackBaseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = Object.create(webpackBaseConfig);

baseConfig.devtool = 'source-map';

baseConfig.entry.main = [
    './src/js/index'
];

baseConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    }),
    new ExtractTextPlugin('css/[name].css', { allChunks: true })
);

baseConfig.postcss = [ autoprefixer({ browsers: ['last 3 versions', 'ie >= 6', 'ff >= 20', '>0.01%'] }) ];

baseConfig.module.loaders.push({
    test: /\.(css|scss)$/, loaders: ['classnames', ExtractTextPlugin.extract('style', 'css!postcss!sass')]
});

module.exports = baseConfig;

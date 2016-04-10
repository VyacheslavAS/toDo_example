const path = require('path');
const webpack = require('webpack');
const ConfigPlugin = require('webpack-config-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'vendor': [
            // js
            'react',
            'redux',
            'selectn',
            'reselect',
            'react-dom',
            'classnames',
            'react-redux',
            'redux-combine-actions'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/assets/index.html'),
            favicon: path.join(__dirname, 'src/assets/notes.png')
        })
    ],
    resolve: {
        extensions: ['', '.js'],
        alias: {
            'src': path.join(__dirname, 'src'),
            'css': path.join(__dirname, 'src/css'),
            'img': path.join(__dirname, 'src/img'),
            'utils': path.join(__dirname, 'src/js/utils'),
            'actions': path.join(__dirname, 'src/js/actions'),
            'reducers': path.join(__dirname, 'src/js/reducers'),
            'selectors': path.join(__dirname, 'src/js/selectors'),
            'constants': path.join(__dirname, 'src/js/constants'),
            'containers': path.join(__dirname, 'src/js/containers'),
            'components': path.join(__dirname, 'src/js/components'),
            'middleware': path.join(__dirname, 'src/js/middleware')
        }
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'], include: [path.join(__dirname, 'src')] },
            { test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, loader: 'url?limit=500000' },
            { test: /\.json$/, loader: 'json' }
        ]
    }
};

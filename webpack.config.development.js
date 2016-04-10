const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const webpackBaseConfig = require('./webpack.config.base');

const baseConfig = Object.create(webpackBaseConfig);

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

baseConfig.devtool = 'eval';

baseConfig.entry.main = [
    './src/js/index'
];

baseConfig.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
    })
);

baseConfig.postcss = [ autoprefixer({ browsers: ['last 3 versions', 'ie >= 6', 'ff >= 20', '>0.01%'] }) ];

baseConfig.module.loaders.push({
    test: /\.(css|scss)$/, loader: 'classnames!style!css?importLoaders=2&localIdentName=[local]---[name]---[hash:base64:5]!postcss!sass'
});


module.exports = baseConfig;

'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let settings = require('./settings');

//the entry start from ${baseDir}
let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-hot-middleware/client',
    './src/main/javascript/index'
  ],
  mode: 'development',
  cache: true,
  devtool: 'eval-source-map',
  output: {
    path: path.join(settings.basePath, 'target/classes/public/static'),
    filename: 'bundle.js',
    publicPath: `${settings.contextPath}/static/`
  },
  devServer: {
    contentBase: settings.srcPath,
    historyApiFallback: true,
    hot: true,
    port: 80,
    publicPath: `${settings.contextPath}/static/`,
    noInfo: false
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      VERSION: JSON.stringify(require(path.resolve(settings.basePath, 'package.json')).version)
    })
  ],
  module: settings.defaultModules,
  name: settings.contextPath
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: true,
      plugins: ['react-hot-loader/babel']
    },
  },
  include: settings.srcPath
});

module.exports = config;

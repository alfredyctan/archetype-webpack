'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let settings = require('./settings');
let project = require('../project');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: path.join(project.srcPath, 'index'),
  mode: 'production',
  cache: false,
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(project.basePath, 'target/classes/public/static'),
    filename: '[name].[chunkhash].js',
    publicPath: `${project.contextPath}/static/`
  },
  optimization: {
    minimize: true,
    splitChunks: {
      maxInitialRequests: 10,
      cacheGroups: {
        reactDom: {
          test: /[\\/]react-dom[\\/]/,
          name: 'react-dom',
          chunks: 'initial',
        },
        coreJs: {
          test: /[\\/]core-js[\\/]/,
          name: 'core-js',
          chunks: 'initial',
        },
        mui: {
          test: /[\\/]material-ui[\\/]/,
          name: 'mui',
          chunks: 'initial',
        },
        lodash: {
          test: /[\\/]lodash.merge[\\/]/,
          name: 'lodash',
          chunks: 'initial',
        },
        common: {
          test: /[\\/]node_module[\\/]/,
          name: 'vendors',
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      VERSION: JSON.stringify(require(path.resolve(project.basePath, 'package.json')).version)
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(project.srcPath, 'index.ejs'),
      filename: '../index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: settings.defaultModules
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: true
    },
  },
  include: project.srcPath
});

module.exports = config;

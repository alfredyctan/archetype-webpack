'use strict';
let settings = require('./settings');

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: `${settings.srcPath}/components/`
    },
    modules: [
      'node_modules',
      'src/modules'
    ]
  },
  module: {},
  name: settings.contextPath
};

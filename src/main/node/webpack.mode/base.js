'use strict';
let project = require('../project');

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: `${project.srcPath}/components/`
    },
    modules: [
      'node_modules',
      'src/modules'
    ]
  },
  module: {},
  name: project.contextPath
};

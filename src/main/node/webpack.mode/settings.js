'use strict';
const project = require('../project');

function defaultModules() {
  return {
    rules: [
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use:
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        },
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        use:{
          loader: 'file-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: project.srcPath,
        enforce: 'pre',
        loader: 'eslint-loader'
      }
    ]
  };
}

module.exports = {
  defaultModules: defaultModules(),
  postcss: function () {
    return [];
  }
};

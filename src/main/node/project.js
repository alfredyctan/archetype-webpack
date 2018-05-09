'use strict';
const path = require('path');
const basePath = path.resolve(__dirname, '../../../');
const srcPath = path.resolve(__dirname, '../../../src/main/javascript');
const testPath = path.resolve( __dirname, '../../../src/test/javascript');
const configPath = path.resolve( __dirname, '../../../src/main/config');

const contextPath = '/context';

console.log('basePath : ' + basePath);
console.log('srcPath : ' + srcPath);
console.log('testPath : ' + testPath);
console.log('configPath : ' + configPath);
console.log('contextPath : ' + contextPath);

module.exports = {
  basePath: basePath,
  srcPath: srcPath,
  testPath: testPath,
  configPath: configPath,
  contextPath: contextPath,
};

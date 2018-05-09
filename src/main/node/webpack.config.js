'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const MODES = ['development', 'production', 'test'];
const ENVS = ['dev', 'local'];

function buildConfig(mode) {
  if (!mode || mode.length <= 0 || MODES.indexOf(mode) === -1) {
    throw 'mode [' + mode + '] is not valid';
  }

  let configPath = path.resolve(__dirname, 'webpack.mode/' + mode); 
  
  console.log('using config : ' + configPath);
  return require(configPath);
}

function validEnv(env) {
  if (!env || env.length <= 0) {
    return 'none';
  }

  if (ENVS.indexOf(env) === -1) {
    throw 'env [' + env + '] is not valid';
  }
  
  return env;
}

process.env.REACT_WEBPACK_ENV = validEnv(args.env);
module.exports = buildConfig(args.mode);

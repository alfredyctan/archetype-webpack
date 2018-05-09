'use strict'
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import config from './webpack.config';

let project = require('./project');

const env = process.env.REACT_WEBPACK_ENV;
const app = express();
const compiler = webpack(config);

app.set('view engine', 'ejs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(favicon(path.resolve(project.srcPath, 'favicon.ico')));

//alias the url request mapping
app.get(`${config.name}/config/base.js`, function(req, res) {
  res.sendFile(project.configPath +'/ui/common/common.js');
});

app.get(`${config.name}/config/env.js`, function(req, res) {
  res.sendFile(project.configPath +`/ui/${env}/env.js`);
});

app.get('*', function (req, res) {
  res.render(path.resolve(project.srcPath, 'index.ejs'));
});

app.listen(config.devServer.port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening at http://localhost:${config.devServer.port}/`);
});


const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var config = getConfig({
  in: join(src, 'app.js'),
  out: dest,
  html: false,
  clearBeforeBuild: true,
  devServer: {
   hot: true,
   contentBase: __dirname
 }
})


module.exports = config;

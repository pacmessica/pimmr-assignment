var path = require('path');
var webpackConfig = require('./webpack.config');
var argv = require('yargs').argv;

module.exports = function(config) {
  config.set({
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sinon'
    ],

    exclude: [
    ],

    reporters: ['spec'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: !argv.watch,

    concurrency: Infinity
  })
}

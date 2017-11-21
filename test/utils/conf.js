'use strict';

var path = require('path');
var basePath = process.cwd();

module.exports = {
  context: basePath,
  output: {
    path: path.join(basePath, 'test/output/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.styl$/,
        loader: './index',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
};

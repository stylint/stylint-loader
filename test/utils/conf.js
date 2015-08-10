'use strict';

module.exports = {
  output: {
    path: './test/output/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.styl$/,
        loader: '../../index',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style!css!stylus',
        exclude: /node_modules/
      }
    ]
  }
};

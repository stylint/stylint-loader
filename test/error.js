'use strict';

var assert = require('chai').assert;
var webpack = require('webpack');
var assign = require('object-assign');
var globalConf = require('./utils/conf');

describe('stylint loader: ERROR tests', function() {
  it('should return error if file contains stylint error based on given .stylintrc', function(done) {
    var localConfig = {
      entry: './test/fixtures/error.js',
      plugins: [
        new webpack.LoaderOptionsPlugin({
          options: {
            stylint: {
              config: './test/config/.stylintrc_error'
            }
          }
        })
      ]
    };

    webpack(assign({}, globalConf, localConfig), function(err, stats) {
      assert.equal(err, null);
      assert.equal(stats.hasErrors(), true);
      done();
    });
  });

  it('should return error if file contains stylint error based on passed url params', function(done) {
    var localConfig = {
      entry: './test/fixtures/error.js',
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.styl$/,
            loader: './index?{ semicolons: { expect: "never", error: true} }',
            exclude: /node_modules/
          }
        ]
      }
    };

    webpack(assign({}, globalConf, localConfig), function(err, stats) {
      assert.equal(err, null);
      assert.equal(stats.hasErrors(), true);
      done();
    });
  });
});

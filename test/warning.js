'use strict';

var assert = require('chai').assert;
var webpack = require('webpack');
var assign = require('object-assign');
var globalConf = require('./utils/conf');

describe('stylint loader', function() {
  it('should return warning if file contains stylint warning based on given .stylintrc', function(done) {
    var localConfig = {
      entry: './test/fixtures/warning.js',
      stylint: {
        config: './test/config/.stylintrc_warning'
      }
    };

    webpack(assign({}, globalConf, localConfig), function(err, stats) {
      assert.equal(err, null);
      assert.equal(stats.hasWarnings(), true);
      done();
    });
  });

  it('should return warning if file contains stylint warning based on passed url params', function(done) {
    var localConfig = {
      entry: './test/fixtures/warning.js',
      module: {
        preLoaders: [
          {
            test: /\.styl$/,
            loader: '../../index?{ semicolons: "never" }',
            exclude: /node_modules/
          }
        ]
      }
    };

    webpack(assign({}, globalConf, localConfig), function(err, stats) {
      assert.equal(err, null);
      assert.equal(stats.hasWarnings(), true);
      done();
    });
  });
});

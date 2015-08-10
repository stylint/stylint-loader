'use strict';

var assert = require('chai').assert;
var webpack = require('webpack');
var assign = require('object-assign');
var globalConf = require('./utils/conf');

describe('stylint loader', function() {
  it('should return warning if file contains stylint warning', function(done) {
    var localConfig = {
      entry: './test/fixtures/warning.js',
      stylint: {
        semicolons: 'never'
      }
    };

    webpack(assign({}, globalConf, localConfig), function(err, stats) {
      console.log(stats.toString());
      assert.equal(err, null);
      assert.equal(stats.hasWarnings(), true);
      done();
    });
  });
});

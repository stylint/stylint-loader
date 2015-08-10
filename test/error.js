'use strict';

var assert = require('chai').assert;
var webpack = require('webpack');
var assign = require('object-assign');
var globalConf = require('./utils/conf');

describe('stylint loader', function() {
  it('should return error if file contains stylint error', function(done) {
    var localConfig = {
      entry: './test/fixtures/error.js',
      stylint: {
        semicolons: {
          expect: 'never',
          error: true
        }
      }
    };

    webpack(assign({}, globalConf, localConfig), function(err, stats) {
      console.log(stats.toString());
      assert.equal(err, null);
      assert.equal(stats.hasErrors(), true);
      done();
    });
  });
});

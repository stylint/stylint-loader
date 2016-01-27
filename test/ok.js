'use strict';

var assert = require('chai').assert;
var webpack = require('webpack');
var assign = require('object-assign');
var globalConf = require('./utils/conf');

describe('stylint loader', function() {
  it('shouldn\'t return error or warning if file it\'s ok based on given .stylintrc', function(done) {
    var localConfig = {
      entry: './test/fixtures/ok.js',
      stylint: {
        config: './test/config/.stylintrc_ok'
      }
    };

    webpack(assign({}, globalConf, localConfig), function(err, stats) {
      assert.equal(err, null);
      assert.equal(stats.hasErrors(), false);
      assert.equal(stats.hasWarnings(), false);
      done();
    });
  });
});

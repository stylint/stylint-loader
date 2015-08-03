'use strict';

var stylint = require('stylint');
var assign = require('object-assign');
var loaderUtils = require('loader-utils');

function lint(source, config, webpack, callback) {
  stylint(source, config)
    .methods({
      read: function() {
        this.cache.files = [webpack.resource];
        this.parse(null, [source]);
      },
      done: function() {
        var result;
        var message;
        var emitter;
        var failureType;

        if (this.cache.errs.length > 0 || this.cache.warnings.length > 0) {
          if (!this.state.quiet) {
            result = [].concat(this.cache.errs, this.cache.warnings);
            message = '\n' + result.join('\n\n') + '\n' + this.cache.msg;
            emitter = this.cache.errs.length > 0 ? webpack.emitError : webpack.emitWarning;

            if (emitter) {
              emitter(message);
            } else {
              throw new Error(
                'Your module system doesn\'t support emitWarning. ' +
                'Update available? \n' +
                message
              );
            }
          } else {
            failureType = this.cache.errs.length > 0 ? 'error' : 'warning';

            throw new Error(
              'Module failed because of a stylint ' + failureType + '.\n' +
              this.cache.msg
            );
          }
        }
      }
    })
    .create();

  if (callback) {
    callback(null, source);
  }
}

module.exports = function(source) {
  var defaultConfig = {};
  var globalConfig = this.options.stylint || {};
  var loaderConfig = loaderUtils.parseQuery(this.query);
  var config = assign({}, defaultConfig, globalConfig, loaderConfig);
  var callback = this.async();

  if (this.cacheable) {
    this.cacheable();
  }

  if (!callback) {
    lint(source, config, this);
    return source;
  }

  try {
    lint(source, config, this, callback);
  } catch (error) {
    callback(error);
  }
};

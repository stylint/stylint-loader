# stylint-loader [![Build Status](https://travis-ci.org/guerrero/stylint-loader.svg?branch=master)](https://travis-ci.org/guerrero/stylint-loader)

> stylint loader for [webpack](http://webpack.github.io/)


## Install

Install the stylint `peerDependency` manually (only if you're using npm v3 or earlier)

```bash
npm install --save-dev stylint
```

Install `stylint-loader` package

```bash
npm install stylint-loader
```


## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

When using with `stylus-loader`, make sure they are in correct order

```javascript
module.exports = {
  // ...
  module: {
    loaders: [
      {
        test: /\.styl$/, 
        loader: 'stylint'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      }
    ]
  }
  // ...
}
```

To be safe, you can use `preLoaders` section to check source files, not modified by `stylus-loader`

```js
module.exports = {
  // ...
  module: {
    preLoaders: [
      {
        test: /\.styl$/, 
        loader: 'stylint'
      }
    ]
  }
  // ...
}
```


### Options

You can pass [stylint options](https://github.com/rossPatton/stylint#options) directly by

- Adding a query string to the loader for this loader usabe only

```js
{
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'stylint-loader?{brackets: "never"}',
        exclude: /node_modules/,
      },
    ],
  },
}
```

- Adding an `stylint` entry in your webpack config for global options:

```js
module.exports = {
  stylint: {
    config: 'path/.stylintrc'
  }
}
```

**Note that you can use both method in order to benefit from global & specific options**


## [License](LICENSE)

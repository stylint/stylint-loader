# stylint-loader [![Build Status](https://travis-ci.org/guerrero/stylint-loader.svg?branch=master)](https://travis-ci.org/guerrero/stylint-loader)

> stylint loader for [webpack](http://webpack.github.io/)

## Install

Install the stylint `peerDependency` manually (only if you're using npm v3 or earlier)

```bash
npm install --save-dev stylint
```

Install `stylint-loader` package

```bash
// webpack 1
npm install stylint-loader@1.x

// webpack 3+
npm install stylint-loader@latest
```

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

When using with `stylus-loader`, make sure they are in correct order

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.styl$/, 
        loader: 'stylint-loader'
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
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
    rules: [
      {
        enforce: 'pre',
        test: /\.styl$/, 
        loader: 'stylint-loader'
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
    rules: [
      {
        test: /\.js$/,
        loader: 'stylint-loader?{brackets: "never"}',
        exclude: /node_modules/,
      }
    ],
  },
}
```

- Adding an `stylint` entry in your webpack config for global options:

```js
plugins: [
  new webpack.LoaderOptionsPlugin({
    options: {
      stylint: {
        config: 'path/.stylintrc'
      }
    }
  })
]
```

**Note that you can use both method in order to benefit from global & specific options**


## [License](LICENSE)

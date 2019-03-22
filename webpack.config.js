const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

var commonConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'country-selector.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  optimization: {
    minimize: true
  }
};

module.exports = [
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'country-selector.min.js',
      libraryTarget: 'window',
      library: 'CountrySelector'
    }
  }),
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/CountrySelector.vue'),
    output: {
      filename: 'country-selector.js',
      libraryTarget: 'umd',
      library: 'country-selector',
      umdNamedDefine: true
    }
  })
];

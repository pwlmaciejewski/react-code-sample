'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, '..', 'src', 'index.jsx')],
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css?modules', 'sass']
      },
    ]
  }
};

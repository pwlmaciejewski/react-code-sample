'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, '..', 'src', 'index.jsx')],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.ejs')
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

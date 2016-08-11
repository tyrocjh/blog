const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, './src/js'),
  images: path.resolve(__dirname, './src/images'),
  build: path.resolve(__dirname, './build')
};

const plugins = [
  new CopyWebpackPlugin([
    {
      from: PATHS.images,
      to: 'images'
    }
  ]),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('css/app.css', { allChunks: true }),
  new HtmlWebpackPlugin()
];

module.exports = {
  entry: {
    app: path.resolve(PATHS.app, 'main.js')
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        loader: 'url?limit=8192&name=fonts/[name].[ext]?[hash]'
      }, 
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=250000&name=images/[name].[ext]?[hash]'
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  devtool: 'source-map'
};
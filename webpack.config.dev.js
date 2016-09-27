const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: path.resolve(__dirname, './src/js'),
  build: path.resolve(__dirname, './build')
};

const plugins = [
  new webpack.NoErrorsPlugin()
];

module.exports = {
  entry: {
    app: path.resolve(PATHS.app, 'main.js')
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/'
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
        loader: 'style!css?sourceMap!sass'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        loader: 'url'
      }, 
      {
        test: /\.(png|jpg)$/,
        loader: 'url'
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    port: 8000,
    historyApiFallback: true
  },
  devtool: 'eval'
};
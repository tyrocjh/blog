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
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    port: 8080,
    historyApiFallback: true
  },
  devtool: 'eval'
};
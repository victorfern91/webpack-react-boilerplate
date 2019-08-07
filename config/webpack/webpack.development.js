const merge = require('webpack-merge');
const webpack = require('webpack');

// webpack plugins
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  plugins: [new DashboardPlugin(), new webpack.HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],

  devServer: {
    port: 8080,
    contentBase: './dist',
    hot: true,
    open: true
  }
});

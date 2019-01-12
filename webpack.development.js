const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

// webpack plugins
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

/**
 * Webpack development configuration
 *
 * @author victorfern91@gmail.com
 * @since 1.0.0
 */

module.exports = merge(common, {
    mode: "development",

    devtool: "source-map",

    plugins: [
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ErrorOverlayPlugin()
    ],

    devServer: {
        port: 8080,
        contentBase: "./dist",
        hot: true
    }
});

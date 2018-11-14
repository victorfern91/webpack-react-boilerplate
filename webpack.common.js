const path = require("path");

// importing webpack plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Webpack common configuration
 *
 * @author victorfern91@gmail.com
 * @since 1.0.0
 */

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js"
    },

    optimization: {
        splitChunks: {
            chunks: "async",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "initial",
                    minChunks: 1,
                    minSize: 0
                },
                default: {
                    reuseExistingChunk: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "React App",
            template: "./index.html",
            inject: "body"
        })
    ],

    resolve: {
        modules: [
            path.resolve("./src"),
            "node_modules"
        ]
    }
};

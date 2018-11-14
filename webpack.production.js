const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

// importing webpack plugins
const TerserPlugin = require("terser-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

/**
 * Webpack development configuration
 *
 * @author victorfern91@gmail.com
 * @since 1.0.0
 */

module.exports = merge(common, {
    mode: "production",

    bail: true,

    devtool: false,

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8
                    },

                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2
                    },

                    mangle: {
                        safari10: true
                    },

                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    }
                },
                parallel: true,
                cache: true,
                sourceMap: false
            })
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),

        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            logLevel: "info",
            reportFilename: "../target/bundle-report.html",
            openAnalyzer: false
        }),

        // Checking duplicate packages in our bundles
        new DuplicatePackageCheckerPlugin()
    ],

    devServer: {
        port: 8080,
        contentBase: "./dist",
        hot: false
    }
});

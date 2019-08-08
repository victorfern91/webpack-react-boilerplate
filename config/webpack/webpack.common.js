const path = require('path');
const autoprefixer = require('autoprefixer');

// importing webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.jsx'],

  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
      minChunks: 1,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
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
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer({ browsers: ['last 2 versions'] })];
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hipster React App',
      template: './public/index.html',
      inject: 'body',
      favicon: './public/favicon.ico'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  resolve: {
    modules: [path.resolve('./src'), path.resolve('./'), 'node_modules']
  }
};

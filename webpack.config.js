const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    // define entry file and output
    entry: './src/index.js',
    output: {
        // move bundle.js to a folder instead the root
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },
    // define babel loader
    module: {
        rules: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
           }, 
           {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    plugins: [
        // New plugin
        new HtmlWebpackPlugin({
          // injects bundle.js to our new index.html
          inject: true,
          // copys the content of the existing index.html to the new /build index.html
          template:  path.resolve('./index.html'),
        }),
      ]
 };
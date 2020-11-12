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
                'file-loader', 
                {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      progressive: true,
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: [0.65, 0.90],
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                      quality: 75
                    }
                  }
                },
            ],
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
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
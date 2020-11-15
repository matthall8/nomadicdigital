const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {

  entry: {

    app: './src/index.js',

  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

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

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({

      title: 'Production',
      template: './src/index.html'

    }),

  ],

};
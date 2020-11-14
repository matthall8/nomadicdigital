const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
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
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html'
    }),
  ],
  };
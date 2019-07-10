const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ]),
      },
      { test: /\.(jpg|png|svg)$/, loader: 'file-loader', options: { name: '[path][name].[hash].[ext]' } },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'file-loader', options: { name: 'fonts/[name].[ext]' } },
    ],
  },
  resolve: {
    // root: path.resolve(__dirname),
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@static': path.resolve(__dirname, 'src/static'),
      '@apollo-client': path.resolve(__dirname, 'src/components/container/Apollo'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8081,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/html/index.html',
      filename: 'index.html',
    }),
  ],
};

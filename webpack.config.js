const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './src/client/dist'),
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties', "@babel/plugin-transform-runtime"],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        include:[ path.join(__dirname, 'client'),
                  path.join(__dirname, 'node_modules/react-image-lightbox/style.css')
      ],
        query: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      },
    ],
  },
};
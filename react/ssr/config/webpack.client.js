const path = require('path');

module.exports = {
  // mode: 'development',
  target: 'node',
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
    ]
  },
}
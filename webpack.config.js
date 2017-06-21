const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './app.js',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: '__dirname',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
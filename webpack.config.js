const path = require('path');
 
module.exports = {
  context: __dirname,
  entry: [
    './src/app.js',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './',
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
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
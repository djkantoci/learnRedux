var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jQuery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jQuery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      __dirname, 'node_modules'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
    }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

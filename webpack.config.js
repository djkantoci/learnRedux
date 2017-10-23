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
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'app/components'),
        path.resolve(__dirname, 'app/api')      
    ],
    alias: {
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
    },
    extensions: ['*','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
    }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

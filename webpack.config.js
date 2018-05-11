let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');  //this is required for HMR
let path = require('path');

let isProd = process.env.ENV === 'prod' ? true : false;
let scssDev = ["style-loader", "css-loader", "sass-loader"];
let scssProd = ExtractTextPlugin.extract({   //HMR doesnt work with ExtractTextPlugin
  fallback: "style-loader",
  use: ["css-loader", "sass-loader"],
  publicPath: "/dist"
});
let cssDev = ["style-loader", "css-loader"];
let cssProd = ExtractTextPlugin.extract({   //HMR doesnt work with ExtractTextPlugin
  fallback: "style-loader",
  use: "css-loader",
  publicPath: "/dist"
});

module.exports = {
  entry: {
    app: './app/scripts/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: isProd ? scssProd : scssDev
      },
      {
        test: /\.css$/,
        use: isProd ? cssProd : cssDev
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.(html)$/,
        use: "html-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Show App',
      hash: true,
      template: "./app/index.html"
    }),
    new ExtractTextPlugin({
      filename: "app.bundle.css",
      disable: !isProd, //This flag must be true with HMR
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: './node_modules/font-awesome',
        to: './font-awesome'
      }
    ])
  ],
  devtool: "inline-source-map"
}
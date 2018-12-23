/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ObjectRestSpreadPlugin = require('@sucrase/webpack-object-rest-spread-plugin');

module.exports = {
  entry: "./src/index.jsx",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["react", "env"],
          plugins: ["syntax-dynamic-import", "transform-class-properties", "transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    filename: "bundle-[name].js",
    path: path.resolve(__dirname, "public", "scripts"),
    publicPath: "scripts/"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 3001
  },
  plugins: [
    new ObjectRestSpreadPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};

// const path = require("path");
// const webpack = require("webpack"); //to access built-in plugins

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlgin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "index.html",
});

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [htmlPlgin],
};

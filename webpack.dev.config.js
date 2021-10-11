const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "vendors",
    },
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const DEV = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: process.env.PUBLIC_PATH || "/",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || 9000,
    sockHost: process.env.SOCK_HOST || "0.0.0.0",
    sockPort: process.env.SOCK_PORT || 9000,
    disableHostCheck: true,
    historyApiFallback: true,
    liveReload: true,
    hot: true,
    writeToDisk: true,
    publicPath: "/",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          "thread-loader",
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: path.resolve(__dirname, "./.cache/.babel"),
              cacheCompression: false,
              compact: true,
              configFile: path.resolve(__dirname, ".babelrc"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          enforce: true,
          name: "vendors",
        },
      },
    },
  },
};

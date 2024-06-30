const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //自动删除打包的dist文件

module.exports = {
  mode: "production", //告知webpack使用相对应的模式 生产环境还是开发环境 内置优化
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};

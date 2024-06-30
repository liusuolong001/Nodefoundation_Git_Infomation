const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //自动删除打包的dist文件

module.exports = {
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
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin(), //内置插件
  ],
};

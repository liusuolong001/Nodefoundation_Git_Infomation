const path = require("path");

/* webpack跑在Node上面使用CommonJs EsModule跑在浏览器上面 */
module.exports = {
  entry: "./src/main.js", //项目入口文件index.js是默认文件名
  output: {
    filename: "bundle.js", //打包后文件名
    path: path.resolve(__dirname, "./dist"), //path要求绝对路径 打包后文件夹
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          /*     {
            loader: "postcss-loader",
            options: {
              postcssOption: {
                plugins: ["autoprefixer"], //webpack.config.js配置文件中 需要加上 postcssOption
              },
            },
          }, */
        ],
      },
    ],
  },
};

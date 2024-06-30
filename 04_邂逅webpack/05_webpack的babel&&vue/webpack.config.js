const path = require("path");

module.exports = {
  entry: "./src/main.js", //项目入口文件index.js是默认文件名
  output: {
    filename: "bundle.js", //打包后文件名
    path: path.resolve(__dirname, "./dist"), //path要求绝对路径 打包后文件夹
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [
          {
            loader: "babel-loader",
            /*     options: {
              plugins: ["@babel/plugin-transform-arrow-functions", "babel/plugin-transform-block-scoping"],
            }, */
            //  webpack中使用预设
            /*       options: {
              presets: ["@babel/preset-env"], // env 将ES6+代码转化成向后兼容版本的javascript代码(ES5的代码)
            }, */
          },
        ],
      },
    ],
  },
  // vue
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), //配置类型别名 简化模块的引用路径
    },
    extensions: [".js", ".vue", ".json"], //webpack中resolve默认配置名是['.js', '.json', '.wasm','.mjs'] 此处添加其他esModule important 导入可以不用加这三个后缀名 import approval from './component/approval'
  },
};

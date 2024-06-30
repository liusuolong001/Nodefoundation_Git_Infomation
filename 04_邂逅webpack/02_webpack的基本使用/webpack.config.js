const path = require("path");

/* webpack跑在Node上面使用CommonJs EsModule跑在浏览器上面 */
module.exports = {
  entry: "./src/main.js", //项目入口文件index.js是默认文件名
  output: {
    filename: "bundle.js", //打包后文件名
    path: path.resolve(__dirname, "./dist"), //path要求绝对路径 打包后文件夹
  },
};

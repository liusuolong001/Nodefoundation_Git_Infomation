/* 内置api path */
const path = require("path");

// 将多个路径拼接在一起,最终返回一个绝对路径: path.resolve()
const a = path.resolve("./yinhao", "./path", "./test.txt");
console.log(a);

// 获取文件的父文件夹
const b = path.dirname(a);
console.log(b);

// 获取文件的文件名
const c = path.basename(a);
console.log(c);

// 获取文件的扩展名
const d = path.extname(a);
console.log(d);

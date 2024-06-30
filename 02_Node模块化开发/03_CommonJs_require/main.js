// 1.require("./utils") 先查找utils为是否为核心模块为为核心模块时直接赋值
const path = require("path");

const { message, sub } = require("./utils");
// 2.以./或者../或者/(根目录)开头的时候require会去查找utils文件utils.js/utils.json/utils.node 没有会将其当成目录查找下面的index.js/.json/node

console.log(message);
sub(1, 2);

// 3.require("axios")  utils不是一个路径也不是一个核心模块时候自动会去node_modules查找 此文件没有会自动向上一级目录查找
const axios = require("axios");
console.log("axios", axios);

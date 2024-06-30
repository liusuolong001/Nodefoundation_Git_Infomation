// 注意import 导入的时候main要加后缀名.js不然找不到此文件 require中会进行推导
import { message, address } from "./main.js";

console.log("message", message);
console.log("address", address);

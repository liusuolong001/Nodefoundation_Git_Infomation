/* 导入方式一*/
import { message, address } from "./main.js";
console.log(message);
console.log(address);

/* 导入方式二 起别名*/
import { message as a, address as b } from "./main.js";
console.log("a", a);
console.log("b", b);

/* 导入方式三 导入时可以给整个模块起别名*/
import * as c from "./main.js";
console.log("c", c.message);

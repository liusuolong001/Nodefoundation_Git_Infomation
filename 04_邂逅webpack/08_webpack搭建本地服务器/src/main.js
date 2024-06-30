import axios from "axios";

const message = "hello babel";
console.log(message);

const foo = () => {
  console.log("foo");
};

foo();

// 修改某一模块的代码的时候,依旧是刷新整个页面需要指定哪些模块发生更新
module.hot.accept("./utils.js", () => {});

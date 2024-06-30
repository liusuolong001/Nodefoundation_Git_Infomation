const message = "hello exports";

function sub(n, o) {
  console.log(n + o);
}

// 在对象中添加message sub
// 开发中不常用写法
exports.message = message;
exports.sub = sub;
